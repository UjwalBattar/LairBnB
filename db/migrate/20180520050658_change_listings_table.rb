class ChangeListingsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :host, :string

    add_index :listings, :host
    add_index :listings, :city
  end
end
