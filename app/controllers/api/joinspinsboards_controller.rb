class Api::JoinspinsboardsController < ApplicationController

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