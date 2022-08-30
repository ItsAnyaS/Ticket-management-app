class SeatsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        seats = Seat.all
        render json: seats
    end

    def show 
        seat = Seat.find_by!(id: params[:id])
        render json: seat
    end

    def update
        seat = Seat.find_by!(id: params[:id])
        if seat.save(seat_params)
            render json: seat
        else
            render json: {error: seat.errors.full_messages}, status: 422
        end
    end

    ## PRIVATE ##

    private

    def seat_params
        params.permit(:available)
    end


end
