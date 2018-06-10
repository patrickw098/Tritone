class UserOnlineEventEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(room)
    channel = Channel.find(room);
    ActionCable.server.broadcast(
      ("chat_#{room}"),
      command: "update_users",
      payload: ActiveSupport::JSON.decode(parse_message(channel))
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
