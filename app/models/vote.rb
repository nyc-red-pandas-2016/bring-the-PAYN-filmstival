class Vote < ApplicationRecord
  belong_to :votable, polymorphic: :true
  belong_to :person
end
