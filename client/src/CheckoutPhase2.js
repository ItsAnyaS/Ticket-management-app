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




return (
    <div className="seat-selection">
        <h2>Please Select a seat</h2>
        <div className="seat-selection-container">

            {seats.map(seat => {
                return (
                    <div key={seat?.id}   className={`seat ${seat.available ? '': 'taken'} `}>
                        <button value={seat?.id} onClick={(e)=> {console.log(e.target.value)}} >{seat?.id}</button>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default CheckoutPhaase2