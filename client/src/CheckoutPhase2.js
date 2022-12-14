import { useState, useEffect, useContext } from "react"
import { NavLink } from 'react-router-dom'
import './CheckoutPhase2.css'

import { MovieContext } from "./App"

const CheckoutPhaase2 = () => {
    
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [seats, setSeats] = useState([])
    const [selectedSeat, setSelectedSeat] = useState()
    const getSeats = async() => {
        let req = await fetch(`http://localhost:3000/rooms/${globalMovie.movie.id}/seats/${globalMovie.showtime.id}`)
        let res = await req.json()
        setSeats(res)
    }
    useEffect(()=> {
        getSeats()
    }, [])


console.log(seats)
const handleSeatSelection = (seat) => {
    setSelectedSeat(seat.id)
    setGlobalMovie({
        ...globalMovie,
        seat}
    )
}

return (
    <div className="seat-selection">
        <div className="screen"></div>
        <h2>SCREEN</h2>
        <div className="seat-selection-container">

            {seats.map(seat => {
                console.log()
                return (
                    <div key={seat?.id}   className={`seat ${seat.available ? '': 'taken'} `}>
                        {
                            seat.available ? (
                                <NavLink to='/checkout/3'>
                                    <button className="seat-btn" value={seat?.id} onClick={() => { handleSeatSelection(seat) }} >{seat?.id}</button> 
                                </NavLink> 
                            ) : "X"
                        }
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default CheckoutPhaase2