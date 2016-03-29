class Movie < ActiveRecord::Base
  validates :title, :image_url, :trailer_url,
    :genre_id, :in_theaters, :director_id,
    :consensus, :description, presence: true

  has_one :director
  has_one :genre
  has_many :castings
  has_many :actors, through: :castings, source: :actor

end
