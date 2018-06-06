class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.string :image_url

      t.timestamps
    end
    add_index :servers, :name
    add_index :servers, :creator_id
  end
end
