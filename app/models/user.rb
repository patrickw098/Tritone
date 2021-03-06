class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :set_avatar_name, :ensure_session_token


  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    return @user if BCrypt::Password.new(@user.password_digest).is_password?(password)
    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  #sets default avatar name to the username#
  def set_avatar_name
    self.display_name ||= self.username
  end

  #sets default online status to false (offline) #
  def set_online_status
    self.online_status = "offline"
  end

  def sorted_servers
    sorted = self.server_memberships.includes(:member).sort_by { |server| server.created_at }
    sorted.map! { |server| server.server_id }
    sorted
  end

  def sorted_dms
    sorted = self.dms.includes(:users).select{ |server| server.last_message }
    sorted = sorted.sort_by { |server| server.last_message.created_at }
    sorted.reverse
  end

  def online
    self.update_attributes({online_status: "online"})
  end

  def offline
    self.update_attributes({online_status: "offline"})
  end

  def friends_array
    friends = self.friends.includes(:friends)
  end

  def confirmed_friends
    friend_obj = {
      friends: [],
      friend_reqs: []
    }
    self.friends_array.each do |friend|
      if friend.friends.include?(self)
        friend_obj[:friends].push(friend.id)
      else
        friend_obj[:friend_reqs].push(friend.id)
      end
    end
    friend_obj
  end

  has_many :server_memberships,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :ServerMembership

  has_many :servers,
  through: :server_memberships,
  source: :server

  has_many :channels,
  through: :servers,
  source: :channels

  has_many :messages,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Message

  has_many :dm_memberships

  has_many :dms,
  through: :dm_memberships,
  source: :dm

  has_many :dm_channels,
  through: :dms,
  source: :channels

  has_many :friend_requests

  has_one :friendship

  has_many :requested_friendships,
  through: :friendship,
  source: :friend_requests

  has_many :friends,
  through: :requested_friendships,
  source: :user

  has_many :wants_to_have_friendship,
  through: :friend_requests,
  source: :friendship

  has_many :wants_to_be_friends_with,
  through: :wants_to_have_friendship,
  source: :user

  def set_random_color!
    colors = ['red', 'blue', 'black', 'yellow', 'purple', 'orange', 'green']
    index = rand(7)
    self.avatar_url = colors[index]
    self
  end

  before_create do
    self.set_random_color!
  end


end
