class ChangeAddressColumnInListings < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :street_address
    add_column :listings, :adress, :string
  end
end
