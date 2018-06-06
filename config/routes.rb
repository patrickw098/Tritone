Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resources :servers, only: [:index, :show, :create, :destroy]
    resources :channels, only: [:show, :create, :update, :destroy]
    resource :sessions, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
