class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def edit
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def update
    @user = User.find(params[:id])
    
    if @user.update(profile_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def profile_params
    params.require(:user).permit(:username, :email, :first_name, :last_name, :gender)
  end
end