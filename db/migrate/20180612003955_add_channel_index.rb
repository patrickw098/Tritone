class AddChannelIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :channels, :dm_server_id
  end
end
