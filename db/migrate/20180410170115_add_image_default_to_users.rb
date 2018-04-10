class AddImageDefaultToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :image
    add_column :users, :image, :string, default: "http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg"
  end
end
