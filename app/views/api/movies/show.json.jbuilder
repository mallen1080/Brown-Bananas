json.partial! 'movie', movie: @movie

json.partial! 'api/reviews/review', movie: @movie

json.reviewCounts @movie.review_counts
