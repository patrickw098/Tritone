class Api::ServersController < ApplicationController
  def index
    @servers = Server.all

    render :index
  end

  def create
    @server = Server.new(server_params)
    @server.creator_id = current_user.id

    if @server.save
      channel = Channel.create( { name: "general", server_id: @server.id })
      server_membership = ServerMembership.create( { server_id: @server.id, member_id: current_user.id})
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])

    if @server.update_attributes(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def show
    @server = Server.includes(:channels, :users).find(params[:id])
  end

  def destroy
    @server = Server.find(params[:id])
    @server.delete

    render json: @server
  end

  private

  def server_params
    params.require(:server).permit(:name, :creator_id)
  end

end
