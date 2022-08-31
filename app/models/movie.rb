class Movie < ApplicationRecord
    has_many :showtimes
    has_many :tickets, through: :showtimes

    def self.limited_random_5
        sadness = Movie.all.shuffle[0..4]
        sadness
    end

    def self.search(term)
        movies = Movie.all
        term = term.tr('-', ' ')
        puts term
        movies.filter { |movie| movie.title.downcase.include?(term.downcase)}
    end

end
