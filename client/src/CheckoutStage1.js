import { useState, useEffect } from 'react'
import ShowtimeButton from './ShowtimeButton'
import { useContext } from 'react'
import { MovieContext } from './App'
import { NavLink } from 'react-router-dom'
import './CheckoutStage1.css'


const CheckoutStage1 = () => {

    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [allTheaters, setAllTheaters] = useState([])
    const [theater, setTheater] = useState({})
    const [movie, setMovie] = useState({})
    const [showtimes, setShowtimes] = useState([])

    useEffect(() => {
        const getMovie = async () => {
            let req = await fetch(`http://localhost:3000/movies/${globalMovie.movie.id}`)
            let res = await req.json()
            console.log('movie', res)
            setMovie(res)
            setShowtimes(res.showtimes)
        }
        getMovie()
    }, [])



    const handleTheaterChange = (e) => {
        let term = e.target.value
        setTheater(term)
    }

    return (
        <div className='checkout-stage-1'>
            <div className="checkout-stage-1-header">
                <h1>Select a showime</h1>
                </div>
            <img className='img' src='https://deadline.com/wp-content/uploads/2022/05/top-gun-2-1-e1653660481403.jpg'/>
                <div className="checkout-stage-1-content">
                    <div className="movie-blowup">
                        <h1>{movie.title}</h1>
                        <h2>{new Date(movie.release_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h2>
                        <h3> {movie.rating} | {movie.runtime} </h3>
                    </div>
                    <div className="showtimes-container">
                        {showtimes.map((showtime) => {
                            const {id, movie_id, theater_id, start_time, end_time} = showtime
                            return (
                                <NavLink to={`/checkout/2`} onClick={()=> {setGlobalMovie({...globalMovie, showtime: showtime})}}>
                                <ShowtimeButton 
                                    key={id}
                                    id={id} 
                                    movieId={movie_id} 
                                    theaterId={theater_id} 
                                    startTime={start_time} 
                                    endTime={end_time}
                                    showtime={showtime}
                                />
                                </NavLink>
                            )
                        })}

                    </div>
                </div>
            
            
        </div>
    )
}

export default CheckoutStage1