class DropColumnFromBookings < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookings, :is_booked?
  end
end
