class Api::UsersController < ApplicationController
  def index
    @users = User.find_by(display_name: params[:display_name])

    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:servers, :channels).find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :avatar_url)
  end

end
