class Movie < ActiveRecord::Base
  validates :title, :image_url, :trailer_url,
    :genre_id, :in_theaters, :director_id,
    :consensus, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :director
  belongs_to :genre
  has_many :castings, dependent: :destroy
  has_many :actors, through: :castings, source: :actor
  has_many :reviews, dependent: :destroy

  def self.newest_in_theaters(count)
    Movie.includes(:genre, :director, :actors)
    .order(in_theaters: :desc)
    .limit(count)
  end

  def self.newest_on_dvd(count)
    Movie.includes(:genre, :director, :actors)
    .where("on_dvd is NOT NULL")
    .order(on_dvd: :desc)
    .limit(count)
  end

  def self.top_rated_theaters(count)
    Movie.includes(:reviews)
    .where("on_dvd is NULL")
    .sort_by { |movie| movie.review_counts[:percentage] }
    .reverse[0...count]
  end

  def self.top_rated_dvd(count)
    Movie.includes(:reviews)
    .where("on_dvd is NOT NULL")
    .where("on_dvd > ?", Date.new(2015, 4, 1))
    .sort_by { |movie| movie.review_counts[:percentage] }
    .reverse[0...count]
  end

  def recent_reviews
    self.reviews
    .order(created_at: :desc)
    .limit(10)
  end

  def review_counts
    return { up: 0, down: 0, percentage: 0 } if self.reviews.length == 0
    up = self.reviews.select { |r| (r.value == true) }.length
    down = self.reviews.select { |r| (r.value == false) }.length
    percentage = (100 * (up / (up + down.to_f))).to_i
    { up: up, down: down, percentage: percentage }
  end

  def parse_for_create_or_edit(params)
    self.genre_id = Genre.find_by_name(params[:movie][:genre]).id
    self.director_id = Director.find_or_create(params[:movie][:director])
    self.trailer_url.sub!("watch?v=", "embed/")
  end

end
