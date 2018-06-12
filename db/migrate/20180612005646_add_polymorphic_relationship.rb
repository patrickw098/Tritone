class AddPolymorphicRelationship < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :dm_server_id
    change_column :channels, :server_id, :integer, null: false
  end
end
