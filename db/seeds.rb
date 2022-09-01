
puts "Starting to seed"


m1 = Movie.create!(title: "Top Gun", description: "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: 'Rooster,' the son of Maverick's late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka 'Goose'. Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.", rating: 'PG-13', runtime: '90 minutes', release_date: '20220819', genre: 'Action')
m2 = Movie.create!(title: "Spiderman: No way home", description: "This is a movie with Tom Holland and Zendaya", rating: 'PG-13', runtime: '95 minutes', release_date: '20220819', genre: 'Action')
m3 = Movie.create!(title: "DC league of super pets", description: "This is a movie with annimated pets trying to save superman", rating: 'PG', runtime: '76 minutes', release_date: '20220820', genre: 'Family')
m4 = Movie.create!(title: "Barbarian", description: "This is a movie about sometihing", rating: 'R', runtime: '104 minutes', release_date: '20210820', genre: 'Horror')
m5 = Movie.create!(title: "Bullet Train", description: "This is a movie about a bullet train", rating: 'R', runtime: '204 minutes', release_date: '202108556', genre: 'Action')


t1 = Theater.create!(name: 'Regal Battery Park', street_address: '102 North End Ave, New York, NY 10282', )
t2 = Theater.create!(name: 'Nitewalk Prospect Park', street_address: '188 Prospect Park West, Brooklyn, NY 11215', )
t3 = Theater.create!(name: 'Alamo Drafthouse Cinema Downtown Brooklyn', street_address: '445 Albee Square W 4th floor, Brooklyn, NY 11201', )
t4 = Theater.create!(name: 'Alpine Cinema', street_address: '6817 5th Ave, Brooklyn, NY 11220', )
t5 = Theater.create!(name: 'Kent Theater', street_address: '1170 Coney Island Ave, Brooklyn, NY 11230', )


r1 = Room.create!(room_number: 'A', capacity: 5, theater_id: t1.id, )
r2 = Room.create!(room_number: 'B', capacity: 5, theater_id: t5.id, )
r3 = Room.create!(room_number: 'C', capacity: 5, theater_id: t2.id, )
r4 = Room.create!(room_number: 'D', capacity: 5, theater_id: t3.id, )
r5 = Room.create!(room_number: 'E', capacity: 5, theater_id: t4.id, )


st1 = Showtime.create!(movie_id: m1.id, theater_id: t1.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st2 = Showtime.create!(movie_id: m2.id, theater_id: t2.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st3 = Showtime.create!(movie_id: m3.id, theater_id: t3.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st4 = Showtime.create!(movie_id: m4.id, theater_id: t4.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st5 = Showtime.create!(movie_id: m5.id, theater_id: t5.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st6 = Showtime.create!(movie_id: m1.id, theater_id: t1.id, start_time: 3.hours.from_now, end_time: 5.hours.from_now)
st7 = Showtime.create!(movie_id: m1.id, theater_id: t1.id, start_time: 4.hours.from_now, end_time: 6.hours.from_now)
st8 = Showtime.create!(movie_id: m1.id, theater_id: t1.id, start_time: 5.hours.from_now, end_time: 7.hours.from_now)


s1 = Seat.create!(movie_id: m1.id, room_id: r1.id, showtime_id: st1.id, available: false, is_accessible: false)
s2 = Seat.create!(movie_id: m1.id, room_id: r1.id, showtime_id: st2.id, available: true, is_accessible: false)
s3 = Seat.create!(movie_id: m1.id, room_id: r1.id, showtime_id: st3.id, available: true, is_accessible: false)
s4 = Seat.create!(movie_id: m1.id, room_id: r1.id, showtime_id: st4.id, available: true, is_accessible: false)
s5 = Seat.create!(movie_id: m1.id, room_id: r1.id, showtime_id: st5.id, available: true, is_accessible: false)

s6= Seat.create!(movie_id: m2.id, room_id: r2.id, showtime_id: st1.id, available: false, is_accessible: false)
s7 = Seat.create!(movie_id: m2.id, room_id: r2.id, showtime_id: st2.id, available: true, is_accessible: false)
s8 = Seat.create!(movie_id: m2.id, room_id: r2.id, showtime_id: st3.id, available: true, is_accessible: false)
s9 = Seat.create!(movie_id: m2.id, room_id: r2.id, showtime_id: st4.id, available: true, is_accessible: false)
s10 = Seat.create!(movie_id: m2.id, room_id: r2.id, showtime_id: st5.id, available: true, is_accessible: false)


u1 = User.create!(first_name: "First", last_name: "User", email: "First_user@email.com", password: "a123")
u2 = User.create!(first_name: "Second", last_name: "User", email: "Second_user@email.com", password: "a123")
u3 = User.create!(first_name: "Third", last_name: "User", email: "Third_user@email.com", password: "a123")
u4 = User.create!(first_name: "Fourth", last_name: "User", email: "Fourth_user@email.com", password: "a123")
u5 = User.create!(first_name: "Fifth", last_name: "User", email: "Fifth_user@email.com", password: "a123")


tk1 = Ticket.create!(showtime_id: st1.id, user_id: u1.id, seat_id: s1.id, price: 20)
tk2 = Ticket.create!(showtime_id: st2.id, user_id: u2.id, seat_id: s2.id, price: 20)
tk3 = Ticket.create!(showtime_id: st2.id, user_id: u3.id, seat_id: s3.id, price: 20)
tk4 = Ticket.create!(showtime_id: st2.id, user_id: u4.id, seat_id: s4.id, price: 20)
tk5 = Ticket.create!(showtime_id: st3.id, user_id: u5.id, seat_id: s5.id, price: 20)


puts "Done seeding 🌱"