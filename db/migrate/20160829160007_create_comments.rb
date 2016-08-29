class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :review_id, null: false
      t.integer :person_id, null: false
      t.text :text, null: false

      t.timestamps null: false
    end
  end
end
