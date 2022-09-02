class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
      user = User.all 
      render json: user, include: :tickets
  end

  def show
    user = User.find_by!(id: params[:id])
    render json: user, include: :tickets
end

def show_with_ticket_showtime
    user = User.find_by!(id: params[:id])
    render json: user.to_json(:include => { :tickets => { :include => { :showtime => { :include => :movie}}}})
  end


  def create
      user = User.create!(user_params)
      render json: user
  end

  def update
      user = User.find_by!(id: params[:id])
      if user.update(user_params)
          render json: user
      else
          render json: {error: user.errors.full_messages}, status: 422
      end
    end

  def destroy
     user = User.find_by!(id: params[:id])
      if user.destroy
          render json: user
      else
          render json: {error: user.errors.full_messages}, status: 422
      end
  end

  # PRIVATE

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end
  

end
