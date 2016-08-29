class Review < ApplicationRecord
  has_many :comments
  belongs_to :Person
  has_many :vote, as: :votable
  belongs_to :film
  has_many :comments, as: :commentable
end
