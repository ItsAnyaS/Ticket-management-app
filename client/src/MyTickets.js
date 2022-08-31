import { useState, useEffect } from 'react'

const MyTickets = () => {

    const [user, setUser] = useState({})
    const [userTickets, setUserTickets] = useState([])

    useEffect(() => {
        const getUser = async () => {
            let req = await fetch('http://localhost:3000/users/1/tickets_showtimes')
            let res = await req.json()
            setUser(res)
            setUserTickets(res.tickets)
        }
        getUser()
    }, [])
    return (
        <div className="my-tickets">
            {userTickets.map((ticket) => {
                const { id, seat_id, price, showtime } = ticket
                const { start_time, movie } = showtime
                const { title } = movie
                    return (
                        <div className='ticket-card'>
                            <p>{title}</p>
                            <p>{start_time}</p>
                            <p>Seat No. {seat_id}</p>
                            <p>${price}</p>
                        </div>
                    )
            })}
            <div className="upcoming-tickets">
                <h3 className="large-text">Upcoming</h3>
                <div className='tickets-container'>

                </div>
            </div>
            <div className="past-tickets">
                <h3 className="large-text">Past</h3>
                <div className='tickets-container'>

                </div>
            </div>
        </div>
    )
}

export default MyTickets