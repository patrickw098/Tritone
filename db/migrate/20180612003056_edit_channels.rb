class EditChannels < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :server_id, :integer, null: true
    add_column :channels, :dm_server_id, :integer
  end
end
