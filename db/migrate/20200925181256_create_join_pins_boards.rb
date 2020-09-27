class CreateJoinPinsBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :join_pins_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
    end
    add_index :join_pins_boards, :pin_id, unique: true
    add_index :join_pins_boards, :board_id, unique: true
  end
end
