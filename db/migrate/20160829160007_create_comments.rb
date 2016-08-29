class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :commentable_id, null: false
      t.string :commentable_type, null: false
      t.integer :user_id, null: false
      t.text :text, null: false

      t.timestamps null: false
    end
  end
end
