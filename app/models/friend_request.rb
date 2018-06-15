class FriendRequest < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: [:friendship_id] }

  belongs_to :user

  belongs_to :friendship

end
