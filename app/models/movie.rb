class Movie < ActiveRecord::Base
  validates :title, :image_url, :trailer_url,
    :genre_id, :in_theaters, :director_id,
    :consensus, :description, presence: true

  belongs_to :director
  belongs_to :genre
  has_many :castings
  has_many :actors, through: :castings, source: :actor
  has_many :reviews

  def self.get_newest_in_theaters(count)
    Movie.includes(:genre, :director, :actors)
    .order(in_theaters: :desc)
    .limit(count)
  end

  def self.get_newest_on_dvd(count)
    Movie.includes(:genre, :director, :actors)
    .where("on_dvd is NOT NULL")
    .order(on_dvd: :desc)
    .limit(count)
  end

  def self.top_rated(release, count)
    release_status = release == "theaters" ?
    "on_release is NULL" : "on_dvd is NOT NULL"
    #NEED TO ADD REVIEWW FILTER AND ADD TO JBUILDER
    movies = Movie.includes(:reviews)
    .where(release_status)
    .limit(count)
  end

  def recent_reviews
    self.reviews
    .order(created_at: :desc)
    .limit(10)
  end

  def review_counts
    up = self.reviews.where(value: true).count
    down = self.reviews.where(value: false).count
    percentage = (100 * (up / (up + down.to_f))).to_i
    { up: up, down: down, percentage: percentage }
  end

end
