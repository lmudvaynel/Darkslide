ActiveAdmin.register Page do

  config.sort_order = 'position_asc'

  sortable

	controller do
    def new
      @page = Page.new
      @page.build_seo   # без этой строки не появляется форма для seo параметров
    end
    def edit
      @page = Page.find(params[:id])
      if @page.seo_id.nil?
        @page.build_seo
      end
    end
  end

	index do
    sortable_handle_column
    column :id
    column :position, :sortable => :position
    column :name
    column :slug
        
    default_actions
  end
  
  form partial: 'form'
end
