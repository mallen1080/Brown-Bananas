class Review < ActiveRecord::Base
  validates :user_id, :movie_id, presence: true
  validates :value, inclusion: [true, false]

  belongs_to :user
  belongs_to :movie

end
