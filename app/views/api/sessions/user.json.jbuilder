if @user
  json.user do
    json.extract! @user, :username, :favorite_genre_id
  end
end


if @errors
  json.errors do
    json.array! @errors
  end
end
