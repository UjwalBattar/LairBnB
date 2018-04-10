class ChangeLocationColumnName < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :location
    add_column :listings, :address, :string
  end
end
