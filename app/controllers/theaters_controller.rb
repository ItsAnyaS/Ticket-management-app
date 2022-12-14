class TheatersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
      theater = Theater.all
      render json: theater, include: :movies
  end

  def show
    theater = Theater.find_by(id: params[:id])
    render json: theater, include: :movies
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
  end


  def destroy
      theater = Theater.find_by!(id: params[:id])
      if theater.destroy
          render json: theater
      else
          render json: {error: theater.errors.full_messages}, status: 422
      end
  end

  def theater_by_movie
    params[:movie_id]
    theaters = Theater.all
    render json: theaters.to_json(methods: [:movies])
  end


end
