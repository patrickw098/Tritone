class Api::ServersController < ApplicationController
  def index
    @servers = Server.all

    render :index
  end

  def create
    @server = Server.new(server_params)
    if @server.save
      channel = Channel.create( { name: "general", server_id: @server.id })
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def show
    @server = Server.find(params[:id])
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
