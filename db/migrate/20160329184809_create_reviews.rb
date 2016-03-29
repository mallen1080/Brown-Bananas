class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false
      t.boolean :value, null: false
      t.text :body

      t.timestamps null: false
    end
  end
end
