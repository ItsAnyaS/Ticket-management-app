import { useState, useEffect } from "react"

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



console.log(selectedSeat)

return (
    <div>
        <h2>Please Select a seat</h2>
        <div>

            {seats.map(seat => {
                return (
                    <div key={seat?.id}   className="seat" style={{backgroundColor: 'red', height: '50px', width: '50px', margin: '20px'}}>
                        <button value={seat?.id} onClick={(e)=> {console.log(e.target.value)}} >{seat?.id}</button>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default CheckoutPhaase2