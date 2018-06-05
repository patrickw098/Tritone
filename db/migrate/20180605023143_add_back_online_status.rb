class AddBackOnlineStatus < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :online_status, :boolean, default: false
  end
end
