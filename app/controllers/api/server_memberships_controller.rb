class Api::ServerMembershipsController < ApplicationController
  def create
    @membership = ServerMembership.new(membership_params)
    @membership.member_id = current_user.id

    if @membership.save
      server_id = @membership.server_id
      @server = Server.find(server_id);
      render '/api/servers/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end

  end

  def destroy
    @membership = ServerMembership.find(params[:id])
    @server = @membership.server
    @membership.destroy

    render '/api/servers/leave'
  end

  private

  def membership_params
    params.require(:membership).permit(:server_id)
  end
end
