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
  post '/movies', to: 'movies#create'
  patch '/movies/:id', to: 'movies#update'
  delete '/movies/:id', to: 'movies#destroy'

  # showtimes

  get '/showtimes', to: 'showtimes#index'
  get '/showtime/:id', to: 'showtimes#show'
  post '/showtimes', to: 'showtimes#create'
  patch '/showtimes/:id', to: 'showtimes#update'
  delete '/showtimes/:id', to: 'showtimes#destroy'

  # seats

  # users

  # tickets

end

