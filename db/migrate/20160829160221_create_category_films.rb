class CreateCategoryFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :category_films do |t|
      t.references :category, null: false
      t.references :film, null: false

      t.timestamps null: false
    end
  end
end
