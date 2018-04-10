class AddColumnsToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :price, :integer
    add_column :listings, :beds, :integer
    add_column :listings, :guests, :integer
    add_column :listings, :bedrooms, :integer
    add_column :listings, :baths, :integer
  end
end
