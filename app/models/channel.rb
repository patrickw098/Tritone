class Channel < ApplicationRecord
  validates :server_id, :name, presence: true

  belongs_to :server

  
end
