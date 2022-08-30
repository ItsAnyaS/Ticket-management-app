class Seat < ApplicationRecord
    belongs_to :room
    has_many :tickets
    has_many :showtimes, through: :tickets
end
