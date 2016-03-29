class Actor < ActiveRecord::Base
  validates :name, presence: true
  has_many :castings
  has_many :movies, through: :castings, source: :movie

end
