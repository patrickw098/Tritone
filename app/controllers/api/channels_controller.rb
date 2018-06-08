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
    @channel = Channel.new(channel_params)

    if @channel.update_attributes
      render :show
    else
      render jon: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.delete

    render json: @channel
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end

end
