class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server

  has_many :messages

  def creator_id
    self.server.creator.id
  end

  def sorted_messages
    channel_messages = self.messages.includes(:channel).where(channel_id: self.id)
    sorted = channel_messages.sort_by { |message| message.created_at }
    sorted.map! { |message| message.id}
    sorted
  end


  before_destroy do
    DeleteChannelEventBroadcastJob.perform_now(self)
  end

end
