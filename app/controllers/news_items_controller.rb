class NewsItemsController < ApplicationController

	def index
    @news_items = NewsItem.all
  end

  def show
    @news_item = NewsItem.find(params[:id])
    @foot = Footer.find(1)
    @temp = Template.find(1)
    @sbtext = Sidebartext.all
  end
end
