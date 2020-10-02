json.partial! "api/pins/pin", pin: @pin
json.photoUrl url_for(@pin.photo) if @pin.photo.attached?