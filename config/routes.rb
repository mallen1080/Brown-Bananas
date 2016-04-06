Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :destroy]
    resources :movies, only: [:create, :show, :update, :destroy, :index]
    resources :reviews, only: [:create, :update, :destroy]
    resources :searches, only: [:index]
  end

  get "auth/facebook/callback", to: "omniauth#facebook"
end
