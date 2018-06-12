class Api::SearchesController < ApplicationController
  def servers
    query = params[:server][:name]
    query = "%" + query.split("").join("%") + "%"
    @servers = Server.where('lower(name) LIKE ?', query).limit(10)

    render '/api/servers/index'
  end

  def users
    query = params[:user][:name]
    query = "%" + query.split("").join("%") + "%"
    @users = User.where('lower(display_name) LIKE ?', query).limit(10)

    render '/api/users/index'
  end

  private

  def user_params
    params.require(:user).permit(:display_name)
  end

  def server_params
    params.require(:server).permit(:name)
  end
end
