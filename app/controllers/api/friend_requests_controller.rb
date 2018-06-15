class Api::FriendRequestsController < ApplicationController
  def create
    @friendship = Friendship.find(params[:user][:id])

    if @friendship
      FriendRequest.create({ friendship_id: @friendship.id, user_id: current_user.id} )
    else
      @friendship = Friendship.create({ user_id: params[:user][:id] )
      FriendRequest.create({ friendship_id: @friendship.id, user_id: current_user.id} )
    end

    render 
  end

  def destroy
    @friendship = Friendship.includes(:member, :server).find(params[:id])
    @server = @friendship.server
    @friendship.destroy

    render '/api/servers/leave'
  end

end
