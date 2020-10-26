json.id pin.id
json.title pin.title
json.description pin.description
json.sourceLink pin.source_link 
json.userId pin.user_id 
json.photoUrl url_for(pin.photo) if pin.photo.attached?

