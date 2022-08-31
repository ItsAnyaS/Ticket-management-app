class MoviesController < ApplicationController
    skip_before_action :verify_authenticity_token

def index
    movies = Movie.all
    render json: movies
end

def show
    movie = Movie.find_by!(id: params[:id])
    render json: movie
end


def show_random
    movie = Movie.find_by!(id: rand(Movie.all.length))
    render json: movie
end

def show_limited
    movies = Movie.limited_random_5
    render json: movies
end

def create
    movie = Movie.create(title: params[:title], description: params[:description], rating: params[:rating], runtime: params[:runtime], release_date: params[:release_date], genre: params[:genre] )
    render json: movie
end

def update
    movie = Movie.find_by!(id: params[:id])
    movie.update(update_params)
    render json: movie
end

def destroy 
    movie = Movie.find_by!(id: params[:id])
    movie.destroy
    render json: movie
end

private

def update_params
    params.permit(:title, :description, :rating, :runtime, :release_date, :genre)
end

end
