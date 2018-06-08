class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :set_avatar_name, :ensure_session_token, :set_online_status

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
    self.display_name = self.username
  end

  #sets default online status to false (offline) #
  def set_online_status
    self.online_status = false
  end

  def sorted_servers
    sorted = self.server_memberships.sort_by { |server| server.created_at }
    sorted.map! { |server| server.server_id }
    sorted
  end

  has_many :friendships,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friendship

  has_many :friends_of,
  primary_key: :id,
  foreign_key: :friend_id,
  class_name: :Friendship

  has_many :friends,
  through: :friendships,
  source: :friendship

  has_many :friend_requests,
  through: :friends_of,
  source: :user

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

end
