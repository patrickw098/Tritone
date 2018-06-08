class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      @channel = Channel.find(@message.channel_id)
      render 'api/channels/show'
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.delete

    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end

end
