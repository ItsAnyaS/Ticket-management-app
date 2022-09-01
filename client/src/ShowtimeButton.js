import { useContext } from "react"
import { MovieContext } from "./App"

const ShowtimeButton = ({ id, movieId, theaterId, startTime, endTime, showtime}) => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)

    return (
        <div className='showtime-button'>
            <button onClick={() => {
                setGlobalMovie({
                    ...globalMovie,
                    showtime}
                )
            }}>{startTime}</button>
        </div>
    )
}

export default ShowtimeButton