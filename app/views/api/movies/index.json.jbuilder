json.newest_in_theaters do
  json.array! Movie.newest_in_theaters(5), partial: 'movie_index', as: :movie
end

json.top_rated_theaters do
  json.array! Movie.top_rated_theaters(11), partial: 'movie_index', as: :movie
end

json.newest_on_dvd do
  json.array! Movie.newest_on_dvd(8), partial: 'movie_index', as: :movie
end

json.top_rated_dvd do
  json.array! Movie.top_rated_dvd(8), partial: 'movie_index', as: :movie
end
