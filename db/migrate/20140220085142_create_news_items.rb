class CreateNewsItems < ActiveRecord::Migration
  def change
    create_table :news_items do |t|
      t.string :title
      t.string :description
      t.text :content
      t.datetime :published_at

      t.timestamps
    end
  end
end
