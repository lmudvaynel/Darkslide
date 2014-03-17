class NewsItem < ActiveRecord::Base
  attr_accessible :image, :content, :description, :published_at, :title

  has_attached_file :image, :styles => { :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :title, presence: true
  validates :description, presence: true
  validates :content, presence: true
  validates :published_at, presence: true

  default_scope order: 'news_items.published_at DESC'
end
