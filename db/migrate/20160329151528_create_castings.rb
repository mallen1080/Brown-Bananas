class CreateCastings < ActiveRecord::Migration
  def change
    create_table :castings do |t|
      t.integer :actor_id, null: false
      t.integer :movie_id, null: false

      t.timestamps null: false
    end
  end
end
