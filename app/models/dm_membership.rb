class DmMembership < ApplicationRecord
  validates :dm_id, uniqueness: { scope: :user_id }

  belongs_to :dm,
  primary_key: :id,
  foreign_key: :dm_id,
  class_name: :Server,
  dependent: :destroy

  belongs_to :user

end
