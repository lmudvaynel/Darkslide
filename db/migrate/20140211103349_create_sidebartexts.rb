class CreateSidebartexts < ActiveRecord::Migration
  def change
    create_table :sidebartexts do |t|
      t.string :content

      t.timestamps
    end
  end
end
