class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.includes(:server, :messages).find(params[:id])
  end

  def update
    @channel = Channel.includes(:server, :messages).find(params[:id])

    if @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    @channel = Channel.includes(:server, :messages).find(params[:id])
    @server = @channel.server
    @channel.destroy

    render :destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end

end
