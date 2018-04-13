class AddGuestsToBookingTable < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :guests, :integer, default: 1, null: false
  end
end
