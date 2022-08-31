class Movie < ApplicationRecord
    has_many :showtimes
    has_many :tickets, through: :showtimes

    # def self.generate_random(limit = 1)
    #     result = []
    #     @movies = [...Movie.all]
    #     limit.times do 
    #         index = rand(@movies.length)
    #         movie = @movies[index] 
    #         result << movie
    #         @movies.delete(movie)
    #     end
    #         result
    # end

    def self.limited_random_5
        sadness = Movie.all.shuffle[0..4]
        sadness
    end

    def self.test
        a = [1,2,3]
        a.splice(1, 1)
    end
end
