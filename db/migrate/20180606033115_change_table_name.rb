class ChangeTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :friendship, :friendships
  end
end
