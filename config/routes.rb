Rails.application.routes.draw do

  
  # theaters
  get "/theaters", to: "theaters#index"
  get "/theaters/:id", to: "theaters#show"
  post "/theaters", to: "theaters#create"
  patch "/theaters/:id", to: "theaters#update"
  delete "/theaters/:id", to: "theaters#destroy"

  # rooms
  get "/rooms", to: "rooms#index"
  post "/rooms", to: "rooms#create"
  patch "/rooms/:id", to: "rooms#update"
  delete "/rooms/:id", to: "rooms#destroy"

  # movies
  get '/movies', to: 'movies#index'
  get '/movies/:id', to: 'movies#show'
  get '/random_movie', to: 'movies#show_random'
  get '/random_movies_5', to: 'movies#show_limited'
  post '/movies', to: 'movies#create'
  patch '/movies/:id', to: 'movies#update'
  delete '/movies/:id', to: 'movies#destroy'
  get '/sorted_movies/:term/:theater_term', to: 'movies#sort_movies'

  # showtimes

  get '/showtimes', to: 'showtimes#index'
  get '/showtimes/:id', to: 'showtimes#show'
  post '/showtimes', to: 'showtimes#create'
  patch '/showtimes/:id', to: 'showtimes#update'
  delete '/showtimes/:id', to: 'showtimes#destroy'

  # seats

  # users
  get '/users', to: 'user#index'
  get '/users/:id', to: 'user#show'
  post '/users', to: 'user#create'
  patch '/users/:id', to: 'user#update'
  delete '/users/:id', to: 'user#destroy'
  
  # tickets

end

