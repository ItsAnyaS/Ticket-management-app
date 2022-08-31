require 'jwt'

class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
        hmac_secret = 'my$ecretK3y'
        user = User.find_by!(email: params[:email])
        token = user["password"]
        payload = {data: user["email"]}
        if token == params[:password]
            hashed_user = JWT.encode payload, hmac_secret, 'HS256'
            render json: {hashed_user: hashed_user}
        else 
            render json: {message: "not authorized"}, status: 404
        end
    end

    def sign_up
            hmac_secret = 'my$ecretK3y'
            User.create!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password]) 
            user = User.find_by!(email: params[:email])
            if user 
            payload = {data: user["username"]}
            hashed_user = JWT.encode payload, hmac_secret, 'HS256'
            render json: {hashed_user: hashed_user}
            else
                render json: {message: 'Something went wrong'}, status: 404
            end
    end


end
