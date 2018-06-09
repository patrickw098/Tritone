class Channel < ApplicationRecord
  validates :server_id, :name, presence: true

  belongs_to :server

  has_many :messages

end
