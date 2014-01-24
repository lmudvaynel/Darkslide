class AddHiddenAndPositionToPages < ActiveRecord::Migration
  def change
  	add_column :pages, :position, :integer
  	add_column :pages, :hidden, :boolean, default: 0
    add_index :pages, :position
  end
end
