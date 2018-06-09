class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}" # creates channel "chat_1" etc.
  end

  def unsubscribed
    stop_all_streams
  end
end
