class RoomsController < ApplicationController
    skip_before_action :verify_authenticity_token #removes all protection from your routes

  def index
    room = Room.all
    render json: room
  end

  def get_seats
    room = Room.find_by!(id: params[:room_id])
    seats = Seat.where(room_id: room.id)
    render json: seats
  end

  def create
    room = Room.create!(room_number: params[:room_number], capacity: params[:capacity], theater_id: params[:theater_id])
    render json: room
  end

  def update
    room = Room.find_by!(id: params[:id])
    if room.update(room_params)
        render json: room
    else
        render json: {error: room.errors.full_messages}, status: 422
    end
  end

  def destroy
    room = Room.find_by!(id: params[:id])
    if room.destroy
        render json: room
    else
        render json: {error: room.errors.full_messages}, status: 422
    end
  end
end

