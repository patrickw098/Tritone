class ThirdChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :online_status, :boolean
  end
end
