class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.datetime :datetime
      t.references :film

      t.timestamps null: false
    end
  end
end
