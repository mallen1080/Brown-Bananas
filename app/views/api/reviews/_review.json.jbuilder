
json.reviews do
  json.array! reviews do |review|
    json.value review.value
    json.body review.body
    json.author User.find(review.user_id).username
    json.created_date review.created_at.strftime('%v')
  end
end
