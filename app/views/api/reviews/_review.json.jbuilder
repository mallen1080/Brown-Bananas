json.reviews do
  json.array! movie.recent_reviews do |review|
    json.value review.value
    json.body review.body
    json.author User.find(review.user_id).username
  end
end
