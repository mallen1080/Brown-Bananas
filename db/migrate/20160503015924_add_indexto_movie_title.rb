class AddIndextoMovieTitle < ActiveRecord::Migration
  def change
    add_index :movies, :title, unique: true
    remove_index :users, :username
    add_index :users, :username, unique: true
  end
end
