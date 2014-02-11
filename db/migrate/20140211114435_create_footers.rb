class CreateFooters < ActiveRecord::Migration
  def change
    create_table :footers do |t|
      t.text :content

      t.timestamps
    end
  end
end
