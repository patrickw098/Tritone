class ChangeUserAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :online_status
  end
end
