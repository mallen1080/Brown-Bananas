json.user do
  json.extract! @user, :username
end

json.errors do
  json.array! @errors
end
