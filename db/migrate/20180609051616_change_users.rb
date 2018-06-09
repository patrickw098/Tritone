class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :online_status, :boolean
  end
end
