class FixListingTabelColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :listings, :ameneties, :amenities
  end
end
