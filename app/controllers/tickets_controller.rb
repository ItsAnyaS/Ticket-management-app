class TicketsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        tickets = Ticket.all
        render json: tickets, include: :showtime
    end

    def show 
        ticket = Ticket.find_by!(id: params[:id])
        render json: ticket, include: :showtime
    end

    def show_showtime
        ticket = Ticket.find_by!(id: params[:id])
        render json: ticket.showtime
    end

end
