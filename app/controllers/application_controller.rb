class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def set_admin_locale
    I18n.locale = params[:locale] || :ru
  end

  private

	  def render_403(exception)
	    respond_to do |format|
	      format.html { render template: 'errors/error_403', layout: 'layouts/application', status: 403 }
	      format.all { render nothing: true, status: 403 }
	    end
	  end

	  def render_404(exception)
	    respond_to do |format|
	      format.html { render 'errors/error_404', status: 404 }
	      format.all { render nothing: true, status: 404 }
	    end
	  end

	  def render_500(exception)
	    ExceptionNotifier.notify_exception(exception,
	                                       env: request.env,
	                                       data: {message: 'an error happened'})
	    respond_to do |format|
	      format.html { render template: 'errors/error_500', layout: 'layouts/application', status: 500 }
	      format.all { render nothing: true, status: 500}
	    end
	  end
end
