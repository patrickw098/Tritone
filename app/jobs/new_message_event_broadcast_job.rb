class NewMessageEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      ("chat_#{message.channel_id}"),
      payload: ActiveSupport::JSON.decode(parse_message(message)),
      command: "update_message"
    )
  end

  private

  def parse_message(message)
    ApplicationController.render(
      partial: 'api/messages/show',
      locals: { message: message }
    )
  end
end
