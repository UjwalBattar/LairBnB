Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show index]
    resource :session, only: %i[create destroy]
    resources :listings, only: %i[create show index]
    resources :bookings, only: %i[create show index destroy]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
