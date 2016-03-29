class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
