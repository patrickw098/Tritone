class Modifyfriendstable < ActiveRecord::Migration[5.2]
  def change
    remove_column :friendships, :friend_id, :accepted
    add_column :friendships, :friend_req_id, :integer, null: false
    add_index :friendships, :friend_req_id
  end
end
