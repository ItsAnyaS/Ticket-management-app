import './TicketCard.css'

const TicketCard = ({seat_id, price, start_time, title}) => {
    return (
        <div className='ticket-card'>
            <p className='title-font'>{title}</p>
            <p>{new Date(start_time).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
            <p>Seat No. {seat_id}</p>
            <p>${price}</p>
            
        </div>
    )
}

export default TicketCard