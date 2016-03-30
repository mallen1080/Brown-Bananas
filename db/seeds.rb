# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Actor.destroy_all
Director.destroy_all
Genre.destroy_all
Movie.destroy_all
Casting.destroy_all

User.create(username: "admin", password: "yellow")

200.times do
  username = Faker::Internet.user_name
  password = Faker::Internet.password
  genre = rand(5) + 1 #KEE PIN SNYC WITH GENRE LIST
  User.create(username: username, password: password, favorite_genre_id: genre)
end

200.times do
  name = Faker::Name.name
  Actor.create(name: name)
end

200.times do
  name = Faker::Name.name
  Director.create(name: name)
end

genres = ["Action", "Animation", "Comedy", "Documentary", "Drama", "Horror", "Sci-Fi"]
genres.each { |genre| Genre.create(name: genre) }

url = "https://www.youtube.com/embed/s7EdQ4Fqbh"
image = "http://media.ifccenter.com/images/films/pulp-fiction_592x299.jpg"

def movie_generator
  { title: Faker::Book.title,
    genre: rand(5) + 1, #KEEP IN SYNC WITH GENRE LIST
    theaters: Faker::Date.between(30.days.ago, Date.today),
    director: rand(Director.count) + 1,
    consensus: Faker::Hipster.sentence,
    description: Faker::Hipster.paragraph }
end

30.times do
  movie = movie_generator
  Movie.create(
  title: movie[:title],
  image_url: image,
  trailer_url: url,
  genre_id: movie[:genre],
  in_theaters: movie[:theaters],
  director_id: movie[:director],
  consensus: movie[:consensus],
  description: movie[:description]
    )
end

170.times do
  movie = movie_generator
  dvd = Faker::Date.between(2.years.ago, Date.today)
  Movie.create(
  title: movie[:title],
  image_url: image,
  trailer_url: url,
  genre_id: movie[:genre],
  in_theaters: movie[:theaters],
  on_dvd: dvd,
  director_id: movie[:director],
  consensus: movie[:consensus],
  description: movie[:description]
    )
end

Movie.all.each do |movie|
  movie.castings.create(actor_id: rand(Actor.count) + 1)
  movie.castings.create(actor_id: rand(Actor.count) + 1)
end

1000.times do
  movie = Movie.find(rand(Movie.count) + 1)
  user = rand(User.count) + 1
  value = [true, false][rand(2)]
  body = Faker::Hacker.say_something_smart
  movie.reviews.create(
    user_id: user,
    value: value,
    body: body)
end
