import { useState, useEffect } from "react"
import './CheckoutPhase2.css'

const CheckoutPhaase2 = () => {
    const [seats, setSeats] = useState([])
    const [selectedSeat, setSelectedSeat] = useState()
    const getSeats = async() => {
        let req = await fetch('http://localhost:3000/rooms/1/seats')
        let res = await req.json()
        setSeats(res)
    }
    useEffect(()=> {
        getSeats()
    }, [])


console.log(seats)
const handleSeatSelection = (e) => {
    setSelectedSeat(e.target.value)
}

return (
    <div className="seat-selection">
        <h2>Please Select a seat</h2>
        <div className="seat-selection-container">

            {seats.map(seat => {
                console.log()
                return (
                    <div key={seat?.id}   className={`seat ${seat.available ? '': 'taken'} `}>
                        {
                            seat.available ? 
                        <button value={seat?.id} onClick={handleSeatSelection} >{seat?.id}</button> : <div>X</div>
                        }
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default CheckoutPhaase2