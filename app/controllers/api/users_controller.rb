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

  def show
    @user = User.includes(:servers).find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :display_name)
  end

end
