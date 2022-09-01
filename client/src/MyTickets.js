import { useState, useEffect } from 'react'

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
            {userTickets.map((ticket) => {
                const { id, seat_id, price } = ticket
                const { start_time, movie } = ticket.showtime
                const { title } = ticket.showtime.movie
                    return (
                        <div className='ticket-card'>
                            <p>{title}</p>
                            <p>{start_time}</p>
                            <p>Seat No. {seat_id}</p>
                            <p>${price}</p>
                        </div>
                    )
            })}
            {/* <div className="upcoming-tickets">
                <h3 className="large-text">Upcoming</h3>
                <div className='tickets-container'>

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