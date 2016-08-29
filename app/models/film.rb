class Film < ApplicationRecord
  has_many :reviews
  has_many :events
  has_many :categoryfilm, class_name: "CategoryFilm"
  has_many :categories, through: :categoryfilm
  has_many :comments, as: :commentable
  has_many :votes, as: :votable
end
