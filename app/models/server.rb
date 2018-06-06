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


end
