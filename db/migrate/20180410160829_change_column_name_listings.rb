class ChangeColumnNameListings < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :adress
    add_column :listings, :street_address, :string
  end
end
