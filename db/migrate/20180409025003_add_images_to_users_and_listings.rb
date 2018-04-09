class AddImagesToUsersAndListings < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image, :string
    add_column :listings, :image, :string
  end
end
