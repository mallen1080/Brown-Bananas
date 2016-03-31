class ChangeUrlstoText < ActiveRecord::Migration
  def up
    change_column :movies, :image_url, :text
    change_column :movies, :trailer_url, :text
  end

  def down
    change_column :movies, :image_url, :string
    change_column :movies, :trailer_url, :string
  end
end
