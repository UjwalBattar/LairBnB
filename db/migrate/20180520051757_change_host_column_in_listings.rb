class ChangeHostColumnInListings < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :host

    add_column :listings, :host_name, :string, null: false
  end
end
