
json.set! @board.id do 
    json.extract! @board, :id, :title, :description
    json.userId @board.user_id
end