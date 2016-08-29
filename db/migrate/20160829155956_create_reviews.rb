class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.text :text, null: false
      t.integer :film_id, null: false
      t.integer :rating, default: 0
      
      t.timestamps null: false
    end
  end
end
