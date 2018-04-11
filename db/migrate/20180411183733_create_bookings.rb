class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.boolean :is_booked?, default: false
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.date :from_date, null: false
      t.date :to_date, null: false

      t.timestamps
    end

    add_index :bookings, :is_booked?
    add_index :bookings, :guest_id
  end
end
