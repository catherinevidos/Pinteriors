require 'open-uri'

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

    if (params[:user][:photoFile])
      file = open(params[:user][:photoFile])
    end
    
    if (params[:user][:photoFile]) && @user.photo.attached?
      @user.photo.destroy 
      @user.photo.attach(io: file, filename: 'hello')
      if @user.update(profile_params)
        render "api/users/show"
      else 
        render json: @user.errors.full_messages, status: 422
      end
    elsif (params[:user][:photoFile]) && !@user.photo.attached?
      @user.photo.attach(io: file, filename: 'hello')
       if @user.update(profile_params)
        render "api/users/show"
      else 
        render json: @user.errors.full_messages, status: 422
      end
    else 
      if @user.update(profile_params)
        render "api/users/show"
      else 
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def profile_params
    params.require(:user).permit(:username, :first_name, :last_name, :gender, :photo)
  end
end