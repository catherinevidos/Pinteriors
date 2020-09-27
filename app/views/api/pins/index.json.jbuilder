 
@pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :description
    json.photoUrl url_for(pin.photo) if pin.photo.attached?
    json.userId pin.user_id
    json.sourceLink pin.source_link 
    end
end




