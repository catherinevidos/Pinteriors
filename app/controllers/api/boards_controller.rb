class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id

    if @board.save
      render "api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    sleep 0.5
    @board = Board.find(params[:id])
    render "api/boards/show"
  end

  def index
    sleep 0.5
    @boards = Board.all
    render "api/boards/index"
  end

  def update
    @board = Board.find(params[:id])
    
    if @board.update(board_params)
      render "api/boards/show"
    else
      render json: ["Cannot update board"], status: 422
    end
  end

  def destroy 
    @board = Board.find(params[:id])

    if @board
       @board.destroy
      render "api/boards/show"
    else
      render json: ["Cannot delete board"], status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :description)
  end

end