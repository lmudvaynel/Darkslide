class Template < ActiveRecord::Base
  attr_accessible :temp_content, :temp_name

  has_many :pages
end
