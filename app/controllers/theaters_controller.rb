class TheatersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
      theater = Theater.all
      render json: theater
  end

  def create
      theater = Theater.create!(name: params[:name], street_address: params[:street_address])
      render json: theater
  end

  def update
      theater = Theater.find_by!(id: params[:id])
      if theater.update(theater_params)
          render json: theater
      else
          render json: {error: theater.errors.full_messages}, status: 422
      end

  def destroy
      theater = Theater.find_by!(id: params[:id])
      if theater.destroy
          render json: theater
      else
          render json: {error: theater.errors.full_messages}, status: 422
      end
  end

end
