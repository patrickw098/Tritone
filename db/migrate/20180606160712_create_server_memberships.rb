class CreateServerMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :server_memberships do |t|
      t.integer :server_id, null: false
      t.integer :member_id, null: false

      t.timestamps
    end

    add_index :server_memberships, :server_id
    add_index :server_memberships, :member_id
  end
end
