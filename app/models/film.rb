class Film < ApplicationRecord
  has_many :reviews
  has_many :events
  has_many :categoryfilms
  has_many :categories, through: :categoryfilms
  has_many :comments, as: :commentable
  has_many :votes, as: :votable
end
