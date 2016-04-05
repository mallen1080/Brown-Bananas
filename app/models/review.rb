class Review < ActiveRecord::Base
  validates :user_id, :movie_id, presence: true
  validates :value, inclusion: [true, false]
  validates_uniqueness_of :user_id, scope: :movie_id

  belongs_to :user
  belongs_to :movie

end
