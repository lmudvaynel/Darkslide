# encoding: utf-8

ActiveAdmin.register NewsItem do
	menu priority: 4
  config.batch_actions = false

  sortable

  index do
    column :title
    column :description
    column :created_at
    column :published_at
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :title
      f.input :image, :as => :file, :hint => image_tag(f.object.image.url(:thumb))
      f.input :description
      f.input :content, as: :ckeditor
      f.input :published_at
    end
    f.actions
  end
  
end
