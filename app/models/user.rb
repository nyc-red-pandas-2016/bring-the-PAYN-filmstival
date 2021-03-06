class User < ApplicationRecord
  has_many :reviews, foreign_key: "reviewer_id"
  has_many :comments
  has_many :votes


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
