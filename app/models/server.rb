class Server < ApplicationRecord
  validates :creator_id, :name, presence: true

  has_many :channels

  belongs_to :creator,
  class_name: :User

  
end
