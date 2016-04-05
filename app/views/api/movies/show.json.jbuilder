json.partial! 'api/movies/movie', movie: @movie

json.partial! 'api/reviews/review', movie: @movie

if @movie.current_user_review(@user)
  json.user_review @movie.current_user_review(@user)
end
