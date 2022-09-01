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

    def create
        ticket = Ticket.create(
            showtime_id: params[:showtime_id],
            seat_id: params[:seat_id],
            price: params[:price],
            user_id: params[:user_id],
        )
    end

    def tickets_by_user
        token = params[:user_id]
        if token
            decoded_token = JWT.decode token, nil, false
            user = User.find_by(email: decoded_token[0]["data"])
            tickets = Ticket.where(user_id: user["id"])
            if tickets
                render json: tickets.to_json(:include => { :showtime => { :include => :movie}})
            end
        else
            render json: [{message: "Couldn't verify user", params: params}]
        end
    end
    
    def add_ticket_to_user
        token = params[:user_id]
        if token
            decoded_token = JWT.decode token, nil, false
            user = User.find_by(email: decoded_token[0]["data"])
            ticket = Ticket.find_by!(showtime_id: params[:showtime_id])
            if ticket
                ticket.update(user_id: user.id)
                render json: {message: "Ticket added successfully"}
            else
            end
        else
            render json: [{message: "Couldn't verify SOMETHING", params: params}]
        end
    end


end
