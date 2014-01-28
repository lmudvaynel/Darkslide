class Template < ActiveRecord::Base
  attr_accessible :temp_content, :temp_name

  has_many :pages

  validates :temp_name, presence: true
  validates :temp_content, presence: true
end
