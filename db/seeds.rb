
puts "Starting to seed"


m1 = Movie.create(title: "Top Gun", description: "This is a movie with Tom Cruz and fast planes", rating: 'PG-13', runtime: '90 minutes', release_date: '20220819', genre: 'Action')
m2 = Movie.create(title: "Spiderman: No way home", description: "This is a movie with Tom Holland and Zendaya", rating: 'PG-13', runtime: '95 minutes', release_date: '20220819', genre: 'Action')
m3 = Movie.create(title: "DC league of super pets", description: "This is a movie with annimated pets trying to save superman", rating: 'PG', runtime: '76 minutes', release_date: '20220820', genre: 'Family')
m4 = Movie.create(title: "Barbarian", description: "This is a movie about sometihing", rating: 'R', runtime: '104 minutes', release_date: '20210820', genre: 'Horror')
m5 = Movie.create(title: "Bullet Train", description: "This is a movie about a bullet train", rating: 'R', runtime: '204 minutes', release_date: '202108556', genre: 'Action')


t1 = Theater.create(name: 'Regal Battery Park', street_address: '102 North End Ave, New York, NY 10282', )
t2 = Theater.create(name: 'Nitewalk Prospect Park', street_address: '188 Prospect Park West, Brooklyn, NY 11215', )
t3 = Theater.create(name: 'Alamo Drafthouse Cinema Downtown Brooklyn', street_address: '445 Albee Square W 4th floor, Brooklyn, NY 11201', )
t4 = Theater.create(name: 'Alpine Cinema', street_address: '6817 5th Ave, Brooklyn, NY 11220', )
t5 = Theater.create(name: 'Kent Theater', street_address: '1170 Coney Island Ave, Brooklyn, NY 11230', )


r1 = Room.create(room_number: 'A', capacity: 5, theater_id: t1.id, )
r2 = Room.create(room_number: 'B', capacity: 5, theater_id: t5.id, )
r3 = Room.create(room_number: 'C', capacity: 5, theater_id: t2.id, )
r4 = Room.create(room_number: 'D', capacity: 5, theater_id: t3.id, )
r5 = Room.create(room_number: 'E', capacity: 5, theater_id: t4.id, )


s1 = Seat.create(movie_id: m1.id, room_id: r1.id, available: true, is_accessible: false)
s2 = Seat.create(movie_id: m1.id, room_id: r1.id, available: true, is_accessible: false)
s3 = Seat.create(movie_id: m1.id, room_id: r1.id, available: true, is_accessible: false)
s4 = Seat.create(movie_id: m2.id, room_id: r2.id, available: true, is_accessible: false)
s5 = Seat.create(movie_id: m3.id, room_id: r3.id, available: true, is_accessible: false)

st1 = Showtime.create(movie_id: m1.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st2 = Showtime.create(movie_id: m2.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st3 = Showtime.create(movie_id: m3.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st4 = Showtime.create(movie_id: m4.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)
st5 = Showtime.create(movie_id: m5.id, start_time: 2.hours.from_now, end_time: 4.hours.from_now)

t = Ticket.create(showtime_id: st1, seat_id: s1, price: 20)
t = Ticket.create(showtime_id: st2, seat_id: s2, price: 20)
t = Ticket.create(showtime_id: st2, seat_id: s3, price: 20)
t = Ticket.create(showtime_id: st2, seat_id: s4, price: 20)
t = Ticket.create(showtime_id: st3, seat_id: s1, price: 20)


puts "Done seeding 🌱"