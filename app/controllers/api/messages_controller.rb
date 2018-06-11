class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      @channel = Channel.includes(:server, :messages).find(@message.channel_id)
      render 'api/channels/show'
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.includes(:channel, :server).find(params[:id])
    @message.delete
    @channel = Channel.includes(:server, :messages).find(@message.channel_id);

    render :destroy
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end

end
