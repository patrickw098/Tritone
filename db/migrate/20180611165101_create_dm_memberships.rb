class CreateDmMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_memberships do |t|
      t.integer :user_id, null: false
      t.integer :dm_id, null: false

      t.timestamps
    end

    add_index :dm_memberships, :dm_id
    add_index :dm_memberships, [:dm_id, :user_id]
  end
end
