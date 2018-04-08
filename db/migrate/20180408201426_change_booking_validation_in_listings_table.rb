class ChangeBookingValidationInListingsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :is_booked?

    add_column :listings, :is_booked?, :boolean, default: false
  end
end
