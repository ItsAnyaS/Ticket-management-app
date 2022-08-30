class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :room_number
      t.integer :capacity
      t.integer :theater_id

      t.timestamps
    end
  end
end
