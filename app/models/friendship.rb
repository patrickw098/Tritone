class Friendship < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :friend_requests

end
