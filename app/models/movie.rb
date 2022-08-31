class Movie < ApplicationRecord
    has_many :showtimes
    has_many :tickets, through: :showtimes

    def self.limited_random_5
        sadness = Movie.all.shuffle[0..4]
        sadness
    end

    def self.search(term, theater_term)
        theater_term = theater_term.tr('-', ' ')
        puts theater_term
        if theater_term == 'none'
            movies = Movie.all
            term = term.tr('-', ' ')
            movies.filter { |movie| movie.title.downcase.include?(term.downcase)}
        else 
            theater = Theater.find_by!(name: theater_term)
            movies = theater.movies
            term = term.tr('-', ' ')
            movies.filter { |movie| movie.title.downcase.include?(term.downcase)}
        end
    end

end
