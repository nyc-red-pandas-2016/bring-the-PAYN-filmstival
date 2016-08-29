class Comment < ApplicationRecord
  belongs_to :person
  has_many :votes, as: :votable
  belongs_to :commentable, polymorphic: true
end
