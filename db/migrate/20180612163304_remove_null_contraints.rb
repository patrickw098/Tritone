class RemoveNullContraints < ActiveRecord::Migration[5.2]
  def change
    change_column :servers, :name, :string, null: true
  end
end
