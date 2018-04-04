class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :password_digets, :password_digest
  end
end
