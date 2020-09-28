class CreateChangesToJoinsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :changes_to_joins_tables do |t|
      remove_index :join_pins_boards, :pin_id
      remove_index :join_pins_boards, :board_id
      add_index :join_pins_boards, :pin_id
      add_index :join_pins_boards, :board_id
    end
  end
end
