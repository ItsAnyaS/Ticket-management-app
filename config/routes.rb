Rails.application.routes.draw do
    
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
end