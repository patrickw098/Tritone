class Dm < ApplicationRecord
  validates :name, presence: true

  has_many :dm_memberships

  has_many :users,
  through: :dm_memberships,
  source: :user

end
