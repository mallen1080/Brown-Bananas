  json.id movie.id
  json.title movie.title
  json.trailer_url movie.trailer_url
  json.image_url movie.image_file_name ? movie.image.url : movie.image_url
  json.genre movie.genre.name
  json.in_theaters movie.in_theaters
  json.in_theaters_parse movie.date_parse("theaters")
  json.on_dvd movie.on_dvd
  json.on_dvd_parse movie.date_parse("dvd") if movie.on_dvd
  json.director movie.director.name
  json.consensus movie.consensus
  json.description movie.description
  json.rating movie.review_counts
  json.actors do
    json.array! movie.actors.map(&:name)
  end
