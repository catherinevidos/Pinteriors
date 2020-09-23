class ChangeAnotherUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :username, true
  end
end
