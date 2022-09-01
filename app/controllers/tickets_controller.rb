class TicketsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        tickets = Ticket.all
        render json: tickets
    end

    def show 
        ticket = Ticket.find_by!(id: params[:id])
        render json: ticket
    end

    def create
        ticket = Ticket.create(
            showtime_id: params[:showtime_id],
            seat_id: params[:seat_id],
            price: params[:price],
            user_id: params[:user_id],
        )
    end
end
