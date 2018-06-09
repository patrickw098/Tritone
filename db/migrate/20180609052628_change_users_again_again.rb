class ChangeUsersAgainAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :online_status, :string, default: "online"
  end
end
