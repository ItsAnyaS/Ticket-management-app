import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TicketCard from './TicketCard'
import './MyTickets.css'

const MyTickets = () => {

    const [userTickets, setUserTickets] = useState([])

    useEffect(() => {
        const test = async () => {
            const user_id = document.cookie.split('=')[1]
            let req = await fetch(`http://localhost:3000/tickets/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": document.cookie
                },
                body: JSON.stringify({ user_id: user_id })
            })
            let res = await req.json()
            console.log('my tickets', res)
            setUserTickets(res)
        }
        test()
    },[])

    return (
        <div className="my-tickets">
            {userTickets.length > 0 
            ?
                userTickets.map((ticket) => {
                    const { id, seat_id, price } = ticket
                    const { start_time, movie } = ticket.showtime
                    const { title } = ticket.showtime.movie
                        return (
                            <TicketCard 
                                seat_id={seat_id}
                                price={price}
                                start_time={start_time}
                                title={title}
                            />
                        )
                })
                : <div className='ticketless'><NavLink to='/search'><button className='buy-product'>You have no tickets. CLICK HERE</button></NavLink></div>
        }
            {/* <div className="upcoming-tickets">
                <h3 className="large-text">Upcoming</h3>
                <div className='tickets-container'>
                <NavLink to='/search'> <button className="nav-cta">Get Tickets</button></NavLink>

                </div>
            </div>
            <div className="past-tickets">
                <h3 className="large-text">Past</h3>
                <div className='tickets-container'>

                </div>
            </div> */}
        </div>
    )
}

export default MyTickets