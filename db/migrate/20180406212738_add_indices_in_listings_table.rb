class AddIndicesInListingsTable < ActiveRecord::Migration[5.1]
  def change
    add_index :listings, :category
    add_index :listings, :state
    add_index :listings, :is_booked?
  end
end
