class ServerMembership < ApplicationRecord
  validates :member_id, :server_id, presence: true

  belongs_to :server,
  primary_key: :id,
  foreign_key: :server_id,
  class_name: :Server


  belongs_to :member,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :User

end
