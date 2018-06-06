class Friendship < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: [:friend_id] }

  attr_reader :accepted

  belongs_to :friendship,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :User

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
