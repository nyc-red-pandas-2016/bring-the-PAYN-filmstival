class Film < ApplicationRecord
  has_many :reviews
  has_many :events
  has_many :categoryfilms
  has_many :categories, through: :categoryfilms
end
