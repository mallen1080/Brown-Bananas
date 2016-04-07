class Movie < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_title, against: :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :title, :image_url, :trailer_url,
    :genre_id, :in_theaters, :director_id,
    :consensus, :description, presence: true
  validates :title, uniqueness: true, on: :create

  belongs_to :director
  belongs_to :genre
  has_many :castings, dependent: :destroy
  has_many :actors, through: :castings, source: :actor
  has_many :reviews, dependent: :destroy

  def self.newest_in_theaters(count)
    Movie.includes(:genre, :director, :actors)
    .where("on_dvd is NULL")
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

  def self.search(options)
    min_rating = options[:min_rating] || 0
    max_rating = options[:max_rating] || 100
    genres = options[:genres] || Genre.all.pluck(:id)
    sort = options[:sort] || "release"

    Movie.includes(:reviews)
    .order(in_theaters: :desc)
    .where(genre_id: genres)
    .select { |movie| movie.review_counts[:percentage] > min_rating &&
      movie.review_counts[:percentage] < max_rating }[0..10]
  end

  def self.get_random
    random = rand(Movie.all.length)
    Movie.all[random]
  end

  def recent_reviews(page)
    self.reviews.includes(:user)
    .order(created_at: :desc)
    .where("body is NOT NULL")
    .page(page)
    .per(6)
    .reverse
  end

  def review_page_count
    total = self.reviews
    .where("body is NOT NULL")
    .count

    return total / 6 if total % 6 == 0
    (total / 6) + 1
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
    self.update_attribute(:on_dvd, nil) unless params[:movie][:on_dvd]
  end

  def date_parse(release)
    stringDate = ""
    if release == "theaters"
      stringDate += self.in_theaters.strftime("%b") + " "
      stringDate += self.in_theaters.strftime("%d")
    else
      stringDate += self.on_dvd.strftime("%b") + " "
      stringDate += self.on_dvd.strftime("%d")
    end
    stringDate
  end

  def current_user_review(user)
    if user
      review = self.reviews.where(user_id: user.id)
      return review[0] if review.length > 0
    end
    nil
  end

end
