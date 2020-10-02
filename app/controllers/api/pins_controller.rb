class Api::PinsController < ApplicationController
  before_action :require_user_owns_pin!, only: [:update]

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id

    if @pin.save
      debugger
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    sleep 0.5
    @pin = Pin.find(params[:id])
    render "api/pins/show"
  end

  def index
    sleep 0.5
    @pins = Pin.all
    render "api/pins/index"
  end

  def update
    @pin = Pin.find(params[:id])
    
    if @pin.update(pin_params)
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy 
    @pin = Pin.find(params[:id])

    if @pin
      @pin.destroy
      render "api/pins/show"
    else
      render json: ["This pin could not be deleted."], status: 422
    end
  end

  private

  def require_user_owns_pin!
    return if current_user.pins.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end

  def pin_params
    params.require(:pin).permit(:title, :description, :source_link, :photo)
  end
end