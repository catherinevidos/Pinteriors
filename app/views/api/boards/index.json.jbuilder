 @boards.each do |board|
  json.set! board.id do 
    json.extract! board, :id, :title, :description
    json.userId board.user_id
    json.pinIds board.pin_ids
    json.pins board.pins
    end
end