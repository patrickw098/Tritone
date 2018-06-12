class Api::DmMembershipsController < ApplicationController
  def create
    dmserver = Server.create({name: "private", creator_id: current_user.id })
    channel = Channel.create({name: "general", server_id: dmserver.id })
    membership1 = DmMembership.new(membership_params)
    membership1.dm_id = dmserver.id
    membership2 = DmMembership.new({ user_id: current_user.id })
    membership2.dm_id = dmserver.id

    membership1.save
    membership2.save

    @user = current_user

    render 'api/users/show'

  end

  def destroy
    @membership = ServerMembership.includes(:member, :server).find(params[:id])
    @server = @membership.server
    @membership.destroy

    render '/api/servers/leave'
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id)
  end
end
