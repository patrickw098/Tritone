class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false
      t.integer :friendship_id, null: false

      t.timestamps
    end
    remove_column :friendships, :accepted
    remove_column :friendships, :friend_req_id
    change_column :friendships, :user_id, :integer, null: false
    add_index :friend_requests, :user_id
    add_index :friend_requests, :friendship_id
  end
end
