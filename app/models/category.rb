class Category < ApplicationRecord
  has_many :categoryfilms
  has_many :films, through: :categoryfilms
end
