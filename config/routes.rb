Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :sessions, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
