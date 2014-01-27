class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.string :temp_name
      t.text :temp_content

      t.timestamps
    end
  end
end
