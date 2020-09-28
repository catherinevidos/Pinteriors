class Api::JoinsPinsBoardsController < ApplicationController

# not sure if i should do something like this??? 
#im doing the controllers work inside the console but i need to make a controller so that i can do these associations on the front end

#pinBoard_params are going to be the ids that we JUST put into the console....aka assign pin_id and board_id

  def create
    @boardPin = JoinPisnBoard.new(pinBoard_params) 
    if @boardPin.save
      

end