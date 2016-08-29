class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
        t.string :username, null: false
        t.string :password_digest, null: false
        t.string :email, null: false
        t.boolean :reviewer, default: false

      t.timestamps null: false
    end
  end
end
