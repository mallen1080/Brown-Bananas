json.movie do
  json.title @movie.title
  json.image_url @movie.image_url
  json.trailer_url @movie.trailer_url
  json.genre @movie.genre.name
  json.in_theaters @movie.in_theaters
  json.on_dvd @movie.on_dvd
  json.director_id @movie.director.name
  json.consensus @movie.consensus
  json.description @movie.description
  json.actors @movie.actors, :name
end

json.reviews do
  json.array! @movie.recent_reviews do |review|
    json.value review.value
    json.body review.body
    json.author User.find(review.user_id).username
  end
end
