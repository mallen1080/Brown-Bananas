class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.string :trailer_url, null: false
      t.integer :genre_id, null: false
      t.date :in_theaters, null: false
      t.date :on_dvd
      t.integer :director_id, null: false
      t.text :consensus, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
