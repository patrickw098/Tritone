class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :dms, :name
  end
end
