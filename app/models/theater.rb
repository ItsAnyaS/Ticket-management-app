class Theater < ApplicationRecord
    has_many :rooms
    has_many :seats, through: :rooms
end
