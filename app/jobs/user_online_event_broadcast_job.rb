class UserOnlineEventEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(room)
    ActionCable.server.broadcast(
      ("chat_#{room}"),
      command: "update_users",
      channel = Channel.find(room)
      payload: ActiveSupport::JSON.decode(parse_message(channel)),
    )
  end

  private

  def parse_message(channel)
    ApplicationController.render(
      partial: 'api/servers/show',
      locals: { channel: channel }
    )
  end

end
