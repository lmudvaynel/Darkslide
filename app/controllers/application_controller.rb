class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def set_admin_locale
    I18n.locale = params[:locale] || :ru
  end
end
