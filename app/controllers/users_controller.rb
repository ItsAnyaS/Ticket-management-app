class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
      user = User.all
      render json: user
  end

  def create
      user = User.create!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password])
      render json: user
  end

  def update
      user = User.find_by!(id: params[:id])
      if user.update(user_params)
          render json: user
      else
          render json: {error: user.errors.full_messages}, status: 422
      end

  def destroy
     user = User.find_by!(id: params[:id])
      if user.destroy
          render json: user
      else
          render json: {error: user.errors.full_messages}, status: 422
      end
  end

end
