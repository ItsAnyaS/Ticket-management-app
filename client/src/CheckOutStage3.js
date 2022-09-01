import { useState, useEffect, useContext } from 'react'
import { MovieContext } from "./App"
import { NavLink } from 'react-router-dom';

import './CheckoutStage3.css'

const CheckoutStage3 = (props) => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [ticketAttributes, setTicketAttributes] = useState({})
    const {seat, movie, showtime, theater} = globalMovie;
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleClickAuth = (e) => {
    //   Navigate("../AuthPage", { replace: true })
    }

    useEffect(() => {
        if (document.cookie != ''){
            setIsLoggedIn(true)
        }

    }, [])

    console.log(globalMovie)

    const handleCheckout = async () => {
        const user_id = document.cookie.split('=')[1]
        let req = fetch('http://localhost:3000/tickets/add', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                showtime_id: showtime,
                user_id: user_id
            }),
        })
    }

    return ( 
        <div className='checkout-phase-3-content'>
            <hr/>
            <h2 className='header'>Location: {theater?.name}</h2>
            <hr/>
            <div className='checkout-container'>
            <div className='checkoutTicket'>
            <h2 className='ch3-cta'>Sign In or Join Now</h2>
            {isLoggedIn ? <button className='signin-checkout-btn' onClick={() => handleCheckout()}>Check out</button> 
        :   <NavLink to='/authenticate'><button className='signin-checkout-btn' onClick={() => handleClickAuth()}>Sign in to check out </button></NavLink>} 
          
            </div>

            <div className='movie-details'>
                <h3 className='ticket-h3'>Ticket:</h3>
                <hr/>
                <p>{movie?.title}</p>
                <p>Showtime: {new Date(showtime?.start_time).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
                <p>Theater: {seat?.room_id}</p>
                <p>Seat number: {seat?.id}</p>
            </div>
            </div>
        </div>
    )
};
export default CheckoutStage3;