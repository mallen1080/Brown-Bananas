class Add < ActiveRecord::Migration
  def change
    add_column :users, :favorite_genre_id, :integer, null: false
  end
end
