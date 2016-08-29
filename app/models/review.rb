class Review < ApplicationRecord
  has_many :comments
  belongs_to :reviewer, class_name: "Person"
  has_many :votes, as: :votable
  belongs_to :film
  has_many :comments, as: :commentable
end
