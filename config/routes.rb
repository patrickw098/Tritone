Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resources :servers, only: [:index, :show, :create, :update]
    resources :channels, only: [:show, :create, :update, :destroy]
    resources :server_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy]
    resources :dm_memberships, only: [:create, :destroy]
    resources :dms, only: [:create, :destroy]
    resources :friend_requests, only: [:create, :destroy]

    get '/searches/servers', to: 'searches#servers'
    get '/searches/users', to: 'searches#users'
    resource :sessions, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
