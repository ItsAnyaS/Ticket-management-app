Rails.application.routes.draw do

  
  # theaters
  get "/theaters", to: "theaters#index"
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
  get '/movie/:id', to: 'movies#show'
  get '/random_movie', to: 'movies#show_random'
  get '/random_movies_5', to: 'movies#show_limited'
  post '/movies', to: 'movies#create'
  patch '/movies/:id', to: 'movies#update'
  delete '/movies/:id', to: 'movies#destroy'

  # showtimes

  get '/showtimes', to: 'showtimes#index'
  get '/showtime/:id', to: 'showtimes#show'
  post '/showtimes', to: 'showtimes#create'
  patch '/showtimes/:id', to: 'showtimes#update'
  delete '/showtimes/:id', to: 'showtimes#destroy'


end

