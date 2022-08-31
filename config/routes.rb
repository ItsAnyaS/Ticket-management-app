Rails.application.routes.draw do

  
  # theaters
  get "/theaters", to: "theaters#index"
  get "/theaters/:id", to: "theaters#show"
  post "/theaters", to: "theaters#create"
  patch "/theaters/:id", to: "theaters#update"
  delete "/theaters/:id", to: "theaters#destroy"

  get '/theater_by_movie/:movie_id', to: 'theaters#theater_by_movie'

  # rooms
  get "/rooms", to: "rooms#index"
  get '/rooms/:room_id/seats/:showtime_id', to: 'rooms#get_seats'
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
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  get '/users/:id/tickets_showtimes', to: 'users#show_with_ticket_showtime'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  
  # tickets

  get '/tickets', to: 'tickets#index'
  get '/tickets/:id', to: 'tickets#show'


  # auth

  post "/auth/signup", to: "auth#sign_up"
  post "/auth/login", to: "auth#login"

end

