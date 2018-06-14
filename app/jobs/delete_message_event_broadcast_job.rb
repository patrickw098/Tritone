class DeleteMessageEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    ActionCable.server.broadcast(
      ("chat_#{message.channel_id}"),
      payload: ActiveSupport::JSON.decode(parse_message(message, channel)),
      command: "delete_message"
    )
  end

  private

  def parse_message(message, channel)
    ApplicationController.render(
      partial: 'api/messages/deleteaction',
      locals: { message: message, channel: channel }
    )
  end
end
