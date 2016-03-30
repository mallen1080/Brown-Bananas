  json.title movie.title
  json.image_url movie.image_url
  json.trailer_url movie.trailer_url
  json.genre movie.genre.name
  json.in_theaters movie.in_theaters
  json.on_dvd movie.on_dvd
  json.director_id movie.director.name
  json.consensus movie.consensus
  json.description movie.description
  json.actors do
    json.array! movie.actors.map(&:name)
  end
