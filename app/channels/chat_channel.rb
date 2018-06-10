class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
    current_user.update(online_status: "online") # creates channel "chat_1" etc.
  end

  def unsubscribed
    current_user.update(online_status: "offline")
    stop_all_streams
  end
end
