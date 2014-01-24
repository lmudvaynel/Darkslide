module PagesHelper

  def menu_item_state(page)
    slug = params[:slug]
    if page.slug == slug
      'current'
    end
  end

end
