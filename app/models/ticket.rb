class Ticket < ApplicationRecord
    belongs_to :showtime
    belongs_to :seat
    
end
