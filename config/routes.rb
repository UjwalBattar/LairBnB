Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :user, only: [:create, :show]
    resource :session, only: %i[create destroy show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
