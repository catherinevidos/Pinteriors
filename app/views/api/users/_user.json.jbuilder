json.extract! user, :id, :username, :email, :gender
  json.firstName user.first_name
  json.lastName user.last_name
  json.photoUrl url_for(user.photo) if user.photo.attached?
