class Actor < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :castings
  has_many :movies, through: :castings, source: :movie

  def self.find_or_create(name)
    actor = Actor.find_by_name(name)
    if actor
      return actor.id
    else
      Actor.create!(name: name)
    end
  end

end
