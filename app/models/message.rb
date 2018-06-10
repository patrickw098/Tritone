class Message < ApplicationRecord
  validates :author_id, :channel_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User,
  dependent: :destroy

  belongs_to :channel,
  dependent: :destroy

  has_one :server,
  through: :channel,
  source: :server

  after_create_commit do
    NewMessageEventBroadcastJob.perform_later(self)
  end

end
