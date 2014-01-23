class Page < ActiveRecord::Base
  attr_accessible :content, :name, :slug, :seo_id, :seo_attributes
  
  belongs_to :seo

  accepts_nested_attributes_for :seo, :allow_destroy => true, :reject_if => :all_blank
end
