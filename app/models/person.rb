class Person < ApplicationRecord
  has_many :reviews
  has_many :comments
  has_many :votes
  
  has_secure_password
end
