json.array! @search_results do |movie|
  json.id movie.id
  json.title movie.title
  json.image_url movie.image_url
  json.actors movie.actors
  json.year movie.in_theaters.strftime("%Y")
end
