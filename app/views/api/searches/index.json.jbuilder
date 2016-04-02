json.array! @search_results do |movie|
  json.id movie.id
  json.title movie.title
  json.year movie.in_theaters.strftime("%Y")
end
