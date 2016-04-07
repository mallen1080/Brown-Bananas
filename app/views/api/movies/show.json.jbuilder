json.partial! 'api/movies/movie', movie: @movie

json.partial! 'api/reviews/review', reviews: @movie.recent_reviews(@review_page)

json.review_page_count @movie.review_page_count

if @movie.current_user_review(current_user)
  json.user_review @movie.current_user_review(current_user)
end
