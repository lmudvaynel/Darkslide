class NewsItem < ActiveRecord::Base
  attr_accessible :content, :description, :published_at, :title

  validates :title, presence: true
  validates :description, presence: true
  validates :content, presence: true
  validates :published_at, presence: true

  default_scope order: 'news_items.published_at DESC'
end
