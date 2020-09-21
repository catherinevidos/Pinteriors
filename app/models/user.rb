class User < ApplicationRecord


  validates :username, :password_digest, :session_token, :email, presence: true

  validates :username, :email, :session_token, uniqueness: true

  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  
  attr_reader :password


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username) 
    return nil unless user && user.is_password?(password) 
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end
