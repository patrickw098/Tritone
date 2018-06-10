class DeleteChannelEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    ActionCable.server.broadcast(
      ("chat_#{channel.id}"),
      command: "redirect_to_server",
      payload: channel.server_id
    )
  end

end
