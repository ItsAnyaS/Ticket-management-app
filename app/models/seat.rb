class Seat < ApplicationRecord
    belongs_to :room
    belongs_to :showtime
    has_many :tickets
    
end
