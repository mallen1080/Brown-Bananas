
# User.destroy_all
# Actor.destroy_all
# Director.destroy_all
# Genre.destroy_all
# Movie.destroy_all
# Casting.destroy_all
#
# User.create(username: "admin", password: "yellow", favorite_genre_id: 1)
#
# 200.times do
#   username = Faker::Internet.user_name
#   password = Faker::Internet.password
#   genre = rand(5) + 1 #KEE PIN SNYC WITH GENRE LIST
#   User.create(username: username, password: password, favorite_genre_id: genre)
# end
#
# 200.times do
#   name = Faker::Name.name
#   Actor.create(name: name)
# end
#
# 200.times do
#   name = Faker::Name.name
#   Director.create(name: name)
# end
#
# genres = ["Action", "Animation", "Comedy", "Documentary", "Drama", "Horror", "Sci-Fi"]
# genres.each { |genre| Genre.create(name: genre) }
#
# url = "https://www.youtube.com/embed/s7EdQ4Fqbh"
# image = "http://cdn.miramax.com/media/assets/Pulp-Fiction1.png"
#
# def movie_generator
#   { title: Faker::Book.title,
#     genre: rand(5) + 1, #KEEP IN SYNC WITH GENRE LIST
#     theaters: Faker::Date.between(30.days.ago, Date.today),
#     director: rand(Director.count) + 1,
#     consensus: Faker::Hipster.sentence,
#     description: Faker::Hipster.paragraph }
# end
#
# 30.times do
#   movie = movie_generator
#   Movie.create(
#   title: movie[:title],
#   image_url: image,
#   trailer_url: url,
#   genre_id: movie[:genre],
#   in_theaters: movie[:theaters],
#   director_id: movie[:director],
#   consensus: movie[:consensus],
#   description: movie[:description]
#     )
# end
#
# 170.times do
#   movie = movie_generator
#   in_theaters = Faker::Date.between(2.years.ago, 3.months.ago)
#   dvd = in_theaters >> 3
#   Movie.create(
#   title: movie[:title],
#   image_url: image,
#   trailer_url: url,
#   genre_id: movie[:genre],
#   in_theaters: in_theaters,
#   on_dvd: dvd,
#   director_id: movie[:director],
#   consensus: movie[:consensus],
#   description: movie[:description]
#     )
# end
#
# Movie.all.each do |movie|
#   movie.castings.create(actor_id: rand(Actor.count) + 1)
#   movie.castings.create(actor_id: rand(Actor.count) + 1)
# end
#
# 1000.times do
#   movie = Movie.find(rand(Movie.count) + 1)
#   user = rand(User.count) + 1
#   value = [true, false][rand(2)]
#   body = Faker::Hacker.say_something_smart
#   movie.reviews.create(
#     user_id: user,
#     value: value,
#     body: body)
# end
#
# 1000.times do
#   movie = Movie.find(rand(Movie.count) + 1)
#   user = rand(User.count) + 1
#   value = [true, false][rand(2)]
#   movie.reviews.create(
#     user_id: user,
#     value: value)
# end

images = [
  "https://www.movieposter.com/posters/archive/main/117/MPW-58950",
  "http://cdn.miramax.com/media/assets/Pulp-Fiction1.png",
  "http://movieswithaplottwist.com/wp-content/uploads/2016/03/fight-club.25541.jpg",
  "http://www.vineeth.ca/files/gimgs/310_1165-requiem-for-a-dream-2000-2.jpg",
  "https://lh5.ggpht.com/koXV4NUZ7rRjm6LbBSvOLzDRe9drUeTmiJqvtvHVPbWRtOze1Giz1lBJFgRjzm4TOvZP=w300",
  "http://fedrev.net/wp-content/uploads/2014/01/TheWolfofWallStreet_iTunesPre-sale_1400x2100.jpg",
  "https://upload.wikimedia.org/wikipedia/en/archive/8/8a/20160129142054!Dark_Knight.jpg",
  "http://orig11.deviantart.net/127e/f/2013/083/e/8/taxi_driver___alternative_poster_by_crisvector-d5z6rnc.jpg",
  "http://www.colesmithey.com/.a/6a00d8341c2b7953ef01156f2610b9970c-pi",
  "http://3ojv801zx6ub12ssdy326u7b.wpengine.netdna-cdn.com/wp-content/uploads/2015/04/005534.jpg",
  "http://www.pxleyes.com/images/contests/movie-poster-recreation/infosteps/fullsize/55509_529a18ee5cc70.jpg",
  "http://moviefiles.alphacoders.com/300/poster-30.jpg",
  "http://onesheetdesign.com/wp-content/uploads/American_History_X.jpg",
  "http://www.wichitaorpheum.com/wp-content/uploads/2013/12/Forrest-Gump-Poster.jpg",
  "http://www.collider.com/wp-content/uploads/Inception-movie-poster-7.jpg"
]

trailers = [
  "https://www.youtube.com/watch?v=7pQQHnqBa2E",
  "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
  "https://www.youtube.com/watch?v=SUXWAEX2jlg",
  "https://www.youtube.com/watch?v=jzk-lmU4KZ4",
  "https://www.youtube.com/watch?v=sY1S34973zA",
  "https://www.youtube.com/watch?v=iszwuX1AK6A",
  "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  "https://www.youtube.com/watch?v=sLpMx8_TYOo",
  "https://www.youtube.com/watch?v=zwhP5b4tD6g",
  "https://www.youtube.com/watch?v=PaZVjZEFkRs",
  "https://www.youtube.com/watch?v=lQKs169Sl0I",
  "https://www.youtube.com/watch?v=6hB3S9bIaco",
  "https://www.youtube.com/watch?v=JsPW6Fj3BUI",
  "https://www.youtube.com/watch?v=bLvqoHBptjg",
  "https://www.youtube.com/watch?v=8hP9D6kZseM"
]

Movie.all.each do |movie|
  num = rand(images.length)
  image = images[num]
  trailer = trailers[num]
  trailer.sub!("watch?v=", "embed/")

  movie.update!(image_url: image, trailer_url: trailer)
end
