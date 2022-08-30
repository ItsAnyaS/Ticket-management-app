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

end
