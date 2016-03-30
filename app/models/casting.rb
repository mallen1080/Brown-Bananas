class Casting < ActiveRecord::Base
  validates :actor_id, :movie_id, presence: true
  validates_uniqueness_of :actor_id, scope: :movie_id
  belongs_to :actor
  belongs_to :movie

  def self.create_from_movie_form(actors, movie)
    movie.castings.destroy_all
    actors.each do |actor|
      Actor.find_or_create(actor).castings.create(movie_id: movie.id)
    end
  end

end
