class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendship do |t|
      t.integer :user_id, null: true
      t.integer :friend_id, null: true
      t.boolean :accepted

      t.timestamps
    end
    add_index :friendship, :user_id
    add_index :friendship, [:friend_id, :user_id], unique: true
    add_index :friendship, :accepted
  end
end
