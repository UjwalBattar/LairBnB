class AddLocationToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :location, :string
    
  end
end
