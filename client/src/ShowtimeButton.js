import { useContext } from "react"
import { MovieContext } from "./App"
import './CheckoutStage1.css'

const ShowtimeButton = ({ id, movieId, theaterId, startTime, endTime, showtime}) => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)

    return (
        <div className='showtime-button'>
            <button className="showtime-btn" onClick={() => {
                setGlobalMovie({
                    ...globalMovie,
                    showtime}
                )
            }}>{new Date(startTime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) }</button>
        </div>
    )
}

export default ShowtimeButton