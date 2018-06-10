class Channel < ApplicationRecord
  validates :server_id, :name, presence: true

  belongs_to :server

  has_many :messages

  def creator_id
    self.server.creator.id
  end

  before_destroy do
    DeleteChannelEventBroadcastJob.perform_now(self)
  end

end
