class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :showtime_id
      t.integer :seat_id
      t.integer :user_id
      t.integer :price
      t.timestamps
    end
  end
end
