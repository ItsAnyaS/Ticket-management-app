import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from "react-router-dom";

const CheckOutStage3 = () => {
    const [ticketAttributes, setTicketAttributes] = useState({})
    // let { id } = useParams();

    useEffect(()=> {
        const getTicket = async () => {
        let req = await fetch(`http://localhost:3000/rooms/1/seats/1/tickets/1`)
        let res = await req.json()
        setTicketAttributes(res)
        console.log(res)
        }
        getTicket()
    },[])

    // let navigate = useNavigate();

    const handleClickAuth = (e) => {
    //   navigate("../AuthPage", { replace: true });
        console.log("Routing to ...")
    }




    return ( 
        <div>
            <h2>Checkout Stage 3</h2>
            <div className='checkoutTicket'>
                {/* change src to `{movie.image}`` */}
                <img className='checkoutImage' src="./topgun.jpeg" alt="Movie poster" width="100" height="100"/>
                <button onClick={() => handleClickAuth()}>Sign in to check out </button>
                {/* <div key={ticket.seat_id}>
                    <h4>{room.room_number}</h4>
                    <h4>{ticket.seat_id}</h4>
                </div> */}
            </div>
        </div>
    )
};
export default CheckOutStage3;