module ApplicationHelper
	
	def seo_meta_tags
    if @page && @page.seo
      "<meta name='description' content='#{@page.seo.description}' />\n"+
      "<meta name='keywords' content='#{@page.seo.keywords}' />\n"+
      "<title>#{@page.seo.title}</title>"
    end
  end
end
