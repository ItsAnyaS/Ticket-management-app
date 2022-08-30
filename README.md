# README

##Models/DB

Theater
- name
- street_address

Room 
- room_number
- capacity:integer 
- theater_id

Movie
- title
- description
- rating
- runtime
- realse_date:datetime
- genre

Showtime
- movie_id
- start_time: datetime
- end_time:datetime

Ticket
- movie_id:integer
- showtime_id:integer
- seat_id:integer
- price:integer

Seat
- room_id:integer
- available:boolean, default true
- is_accesible:boolean 

User



##Model methods
```
theaters => Theaters.all
theater.movies => [list of movies]
movie.showtimes => [list of showtimes ]
showtimes.tickets => [list of all tickets]
ticket.seat => [seat number]
```

seat belongs to ticket
ticket belongs to showtime
showtime belongs to movie
movie belongs to theater

##Contorllers

Movies
Showtimes
Theater
Seat


##View


1. talk about what models you need 
2. wrtie down what method make sense to call on what objects
3. 



