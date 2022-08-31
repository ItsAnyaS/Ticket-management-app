class Theater < ApplicationRecord
    has_many :rooms
    has_many :showtimes
    has_many :movies, through: :showtimes
    has_many :seats, through: :rooms
end
