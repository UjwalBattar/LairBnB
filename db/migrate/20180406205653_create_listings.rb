class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :street_address
      t.string :city
      t.string :state
      t.string :country
      t.integer :zip_code
      t.string :category, null: false
      t.text :description, null: false
      t.text :ameneties
      t.text :rules
      t.float :latitude
      t.float :longitude
      t.boolean :is_booked?, null: false
      t.integer :host_id

      t.timestamps
    end
    add_index :listings, :title, unique: true
    add_index :listings, %i[category state is_booked?]
  end
end
