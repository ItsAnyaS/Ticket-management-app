class CreateSeats < ActiveRecord::Migration[7.0]
  def change
    create_table :seats do |t|
      t.integer :movie_id
      t.integer :room_id
      t.integer :showtime_id
      t.boolean :available, default: true
      t.boolean :is_accessible

      t.timestamps
    end
  end
end
