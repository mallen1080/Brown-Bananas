class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :movies

end
