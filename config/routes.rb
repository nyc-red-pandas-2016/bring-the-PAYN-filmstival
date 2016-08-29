Rails.application.routes.draw do
  resources :persons, :films, :reviews, :votes, :comments, :categories

end
