import { useState, useEffect } from 'react'
import ShowtimeButton from './ShowtimeButton'

const CheckoutStage1 = () => {
    const [allTheaters, setAllTheaters] = useState([])
    const [theater, setTheater] = useState({})
    const [movie, setMovie] = useState({})
    const [showtimes, setShowtimes] = useState([])

    // show method is technically not needed if we are fetching all theaters, it depends
    // useEffect(() => {
    //     const getTheater = async (theaterId = 1) => {
    //         let req = await fetch(`http://localhost:3000/theaters/${theaterId}`)
    //         let res = await req.json()
    //         console.log('theater', res)
    //         setTheater(res)
    //     }
    //     getTheater()
    // }, [])

    useEffect(() => {
        const getAllTheaters = async (theaterId = 1) => {
            let req = await fetch('http://localhost:3000/theaters')
            let res = await req.json()
            console.log('theaters', res)
            setAllTheaters(res)
            setTheater(res[theaterId - 1])
        }
        getAllTheaters()
    }, [])

    useEffect(() => {
        const getMovie = async (movieId = 1) => {
            let req = await fetch(`http://localhost:3000/movies/${movieId}`)
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
                <div className='theater-select'>
                    <select onChange={handleTheaterChange}>
                        <option value='none' defaultValue>---select a theater---</option>
                        {allTheaters.map(theater => {
                            let theaterParams = theater?.name.replace(' ', '-')
                            return (
                                <option key={theater.id} value={theaterParams}>{theater?.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="checkout-stage-1-content">
                    <div className="movie-blowup">
                        <h1>{movie.title}</h1>
                        <h2>{movie.release_date}</h2>
                        <h3> {movie.rating} | {movie.runtime} </h3>
                    </div>
                    <div className="showtimes-container">
                        {showtimes.map((showtime) => {
                            const {id, movie_id, theater_id, start_time, end_time} = showtime
                            return (
                                <ShowtimeButton 
                                    key={id}
                                    id={id} 
                                    movieId={movie_id} 
                                    theaterId={theater_id} 
                                    startTime={start_time} 
                                    endTime={end_time}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutStage1