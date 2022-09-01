import { useState, useEffect, useContext } from 'react'
import { MovieContext } from "./App"

const CheckoutStage3 = (props) => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [ticketAttributes, setTicketAttributes] = useState({})
    const {seat, movie, showtime, theater} = globalMovie;

    const handleClickAuth = (e) => {
    //   navigate("../AuthPage", { replace: true });
        console.log("Routing to ...")
    }

    const handleCheckout = () => {
        fetch('http://localhost:3000/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: 10,
                showtime_id: showtime.id,
                seat_id: seat.id,
                user_id: 1
            }),
})
    }

    return ( 
        <div>
            <h2>Checkout Stage 3</h2>
            <div className='checkoutTicket'>
                {/* change src to `{movie.image}`` */}
                <img className='checkoutImage' src="./topgun.jpeg" alt="Movie poster" width="100" height="100"/>
                <button onClick={() => handleClickAuth()}>Sign in to check out </button>
                <button onClick={() => handleCheckout()}>Check out</button>
                <div>
                    <h2>Theater name: {theater.name}</h2>
                    <h3>Movie title: {movie.title}</h3>
                    <h4>Showtime start date: {showtime.start_time}</h4>
                    <h4>Room ID: {seat.room_id}</h4>
                    <h4>Seat ID: {seat.id}</h4>
                </div>
            </div>
        </div>
    )
};
export default CheckoutStage3;