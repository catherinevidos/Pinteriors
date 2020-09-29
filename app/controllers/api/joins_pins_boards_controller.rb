class Api::JoinsPinsBoardsController < ApplicationController

# not sure if i should do something like this??? 
#im doing the controllers work inside the console but i need to make a controller so that i can do these associations on the front end

#pinBoard_params are going to be the ids that we JUST put into the console....aka assign pin_id and board_id
#CREATE AND DESTROY

# render the board show page (THAT will have the updated pins on it). you dont need a reducer (just say receive board and it will update those board ids)
# should not need to make views for JoinPinsBoard

  def create
    @boardPin = JoinPinsBoard.new(boardPin_params) 
    if @boardPin.save
      @board = Board.find(@boardPin.board_id)
      render "api/boards/show"
    else
       render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy 
    @boardPin = JoinsPinsBoard.find_by_credentials(params[:pin_id], params[:board_id])
    # @boardPin = JoinPinsBoard.find(params[:id])

    if @boardPin
      @boardPin.destroy
      @board = Board.find(@boardPin.board_id)
      render "api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private

  def boardPin_params
    params.require(:boardPin).permit(:pin_id, :board_id)
  end
end