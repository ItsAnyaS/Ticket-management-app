class ShowtimesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        showtime = Showtime.all
        render json: showtime
    end

    def show
        showtime = Showtime.find_by!(id: params[:id])
        render json: show
    end
    
    def create
        showtime = Showtime.create(movie_id: params[:movie_id], start_time: params[:start_time], end_time: params[:end_time])
        render json: showtime
    end
    
    def update
        showtime = Showtime.find_by!(id: params[:id])
        showtime.update(update_params)
        render json: showtime
    end
    
    def destroy 
        showtime = Showtime.find_by!(id: params[:id])
        showtime.destroy
        render json: showtime
    end
    
    private
    
    def update_params
        params.permit(:movie_id, :start_time, :end_time)
    end



end

 
    
    