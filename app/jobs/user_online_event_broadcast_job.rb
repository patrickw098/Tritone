class UserOnlineEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(user)
    user_channels = user.channels
    user_channels.each do |channel|
      ActionCable.server.broadcast(
        ("chat_#{channel.id}"),
        command: "update_users",
        payload: ActiveSupport::JSON.decode(parse_message(user))
      )
    end
  end

  private

  def parse_message(user)
    ApplicationController.render(
      partial: 'api/users/action',
      locals: { user: user }
    )
  end

end
