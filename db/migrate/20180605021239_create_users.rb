class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :avatar_url
      t.string :display_name
      t.boolean :online_status, null: false, :default => false

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :online_status
    add_index :users, :session_token
  end
end
