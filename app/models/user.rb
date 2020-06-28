class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: true, format: { with: /\A.*@.*\.com\z/ }
  validates :first_name, presence: true, uniqueness: { scope: :last_name }
  validates :last_name, presence: true
  validates :password, length: { in: 6..10 }
end
