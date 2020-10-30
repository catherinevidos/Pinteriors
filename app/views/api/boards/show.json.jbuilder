
json.set! @board.id do 
    json.extract! @board, :id, :title, :description
    json.userId @board.user_id
    json.pinIds @board.pins.pluck(:id)
    json.pins @board.pins
end