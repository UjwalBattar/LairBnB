class ChangeDateOfBirthDataType < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :date_of_birth
    add_column :users, :date_of_birth, :date
  end
end
