class Api::DmsController < ApplicationController

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
