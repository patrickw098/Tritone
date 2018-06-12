class Server < ApplicationRecord
  validates :creator_id, :name, presence: true

  has_many :channels

  belongs_to :creator,
  class_name: :User

  has_many :server_members,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :ServerMembership

  has_many :users,
  through: :server_members,
  source: :member

  has_many :dm_members,
  primary_key: :id,
  foreign_key: :dm_id,
  class_name: :DmMembership

  has_many :dm_users,
  through: :dm_members,
  source: :user

  has_many :messages,
  through: :channels,
  source: :messages

  def sorted_channels
    serv_channels = self.channels
    sorted = serv_channels.sort_by { |channel| channel.created_at }
    sorted.map! { |channel| channel.id }
    sorted
  end

  def last_message
    self.messages.includes(:server).last
  end


end
