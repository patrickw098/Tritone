class Api::DmMembershipsController < ApplicationController
  def create
    users_array = [current_user.id, params[:id]].sort
    @dmserver = Dm.create(name: "#{users_array[0]}-&-#{users_array[1]}")
    @membership1 = ServerMembership.new(membership_params)
    @membership1.server_id = @dmserver.id
    @membership2 = ServerMembership.new(current_user.id)
    @membership2.server_id = @dmserver.id

    @membership1.save
    @membership2.save

    render json: ["hello"]

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
