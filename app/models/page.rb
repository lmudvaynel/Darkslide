class Page < ActiveRecord::Base
  attr_accessible :content, :name, :slug, :seo_id, :seo_attributes, :position,
  								:hidden, :template_id
  
  belongs_to :seo
  belongs_to :template

  acts_as_list

  accepts_nested_attributes_for :seo, :allow_destroy => true, :reject_if => :all_blank

  validates :slug, presence: true, uniqueness: true
  validates :name, presence: true
  validates :template_id, presence: true

  default_scope order('position')
  scope :visible, -> { where(hidden: false) }
  scope :invisible, -> { where(hidden: true) }
end
