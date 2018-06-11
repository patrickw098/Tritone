class DmMembership < ApplicationRecord
  validates :dm_id, uniqueness: { scope: :user_id }

  belongs_to :dm,
  dependent: :destroy

  belongs_to :user

end
