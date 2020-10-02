# json.set! pin.id do 
#     json.extract! pin, :id, :title, :description, :source_link
#     json.photoUrl url_for(pin.photo)
#     json.userId pin.user_id
# end

json.extract! pin, :id, :title, :description,:source_link, :user_id
