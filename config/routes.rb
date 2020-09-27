Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :update] do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :pins, only: [:create, :show, :index, :update, :destroy] 

    resources :boards, only: [:create, :show, :index, :update, :destroy] do 
      resources :pins, only: [:index, :create, :destroy]
    end

  end
  
  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
