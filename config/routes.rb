#had them all nested but i dont think it makes sense now
#pin obhects, the join pins boards are the pins on this board that i have
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :index, :show, :update] 

    resource :session, only: [:create, :destroy]

    resources :pins, only: [:create, :show, :index, :update, :destroy] 

    resources :boards, only: [:create, :show, :index, :update, :destroy] 

    resources :joinspinsboards, only: [:create, :destroy]

  end
  
  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
