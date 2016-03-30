class Director < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :movies

  def self.find_or_create(name)
    director = Director.find_by_name(name)
    return director.id if director
    
    new_director = Director.create!(name: name)
    new_director.id
  end

end
