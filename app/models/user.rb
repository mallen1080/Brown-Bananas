class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token,
    :favorite_genre_id, presence: true
  validates :password, length: { minimum: 6 }
  validates :username, uniqueness: true

  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, pw)
    @user = User.find_by_username(username)
    return nil if @user.nil?
    digest = BCrypt::Password.new(@user.password_digest)
    digest.is_password?(pw) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.save
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
