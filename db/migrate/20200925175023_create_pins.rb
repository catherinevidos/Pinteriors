class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description
      t.integer :user_id, null: false 
      t.string :source_link
    end
    add_index :pins, :user_id
  end
end
