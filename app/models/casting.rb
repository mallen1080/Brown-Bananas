class Casting < ActiveRecord::Base
  validates :actor_id, :movie_id, presence: true
  belongs_to :actor
  belongs_to :movie

end
