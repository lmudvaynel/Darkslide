TestApp::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root :to => "pages#show", :slug => 'index'
  get ':slug' => 'pages#show', :as => :slug
  resources :pages
  
end
