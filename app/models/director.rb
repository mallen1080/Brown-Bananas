class Director < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :movies

  def self.find_or_create(name)
    director = Director.find_by_name(name)
    if director
      return director.id
    else
      new_director = Director.create!(name: name)
      new_director.id
    end
  end

end
