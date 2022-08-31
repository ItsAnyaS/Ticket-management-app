import { useState, useEffect } from 'react'
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { MovieContext } from './App';
import { useContext } from 'react';

const MoviePage = () => {
    const [movie, setMovie] = useState({})
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
console.log(globalMovie)
let newTheater = ''
    const handleNoTheater = async() => {
        if (!globalMovie.theater){
            let req = await fetch(`http://localhost:3000//theater_by_movie/${globalMovie.movie.id}`)
            let res = await req.json()
            res.forEach(theater => {
                theater.movies.forEach(movie => {
                    if (movie.id == globalMovie.movie.id){
                        setGlobalMovie({
                            ...globalMovie,
                            theater: theater
                        })
                        return
                    }

                })

        
            })
        } 
    }
    handleNoTheater()
    console.log(newTheater)

    useEffect(()=> {
        const getMovie = async () => {
        let req = await fetch(`http://localhost:3000/movies/${globalMovie.movie?.id}`)
        let res = await req.json()
        setMovie(res)
        }
        getMovie()
    },[])

    let navigate = useNavigate();

    const handleClick = (e) => {
    //   navigate("../showtimes", { replace: true });
        console.log("Routing to checkout...")
    }

    const release_date = movie.release_date
    const readable_date = new Date(release_date).toDateString()



    return ( 
        <div>
            <h2>MoviePage</h2>
            <div className='banner-image'>
                {/* change src to `{movie.image}`` */}
                <img src="./topgun.jpeg" alt="Movie poster" width="1100" height="600"/>
            </div>
           <NavLink to='/checkout/1'> <button >Get Tickets</button></NavLink>
            <div key={movie.id}>
                <h4>{movie.title}</h4>
                <p>{movie.runtime}</p>
                <p>{movie.rating}</p>
                <p>{readable_date}</p>
                <p>{movie.genre}</p>
            </div>
            <div>
                <p>{movie.description}</p>
            </div>
        </div>
    )
};
export default MoviePage;