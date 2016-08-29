class Category < ApplicationRecord
  has_many :categoryfilms, class_name: "CategoryFilm"
  has_many :films, through: :categoryfilms
end
