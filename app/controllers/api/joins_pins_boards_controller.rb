class Api::JoinsPinsBoardsController < ApplicationController


  def create
    @boardsPin = BoardsPins.new(boardsPin_params)
    @

end