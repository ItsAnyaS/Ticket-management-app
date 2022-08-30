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

end
end
