class Person < ApplicationRecord
  has_many :reviews, foreign_key: "reviewer_id"
  has_many :comments
  has_many :votes

  has_secure_password
end
