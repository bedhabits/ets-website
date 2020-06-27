Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'bio', to: 'pages#bio', as: :bio
  get 'contact', to: 'pages#contact', as: :contact
end
