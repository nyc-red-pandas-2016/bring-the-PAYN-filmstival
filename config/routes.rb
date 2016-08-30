Rails.application.routes.draw do
  root 'films#rootpath'
  resources :films, :reviews, :votes, :comments, :categories

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
