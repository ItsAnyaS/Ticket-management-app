import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MovieContext } from "./App"
import './MovieCard.css'
const MovieCard = ({movie}) => {

const {globalMovie, setGlobalMovie} = useContext(MovieContext)
const handleClick = () => {
  setGlobalMovie({
    ...globalMovie,
    movie: movie})
}
  
    return (
      <NavLink to='/movie' onClick={handleClick} style={{color: 'white', textDecoration: 'none'}}>
        <div className="movie-card" key={movie?.id}>
        <img src='./movie-poster.jpg'/>
        <img/>
        <h4>{movie?.title}</h4>
        <p>{movie?.runtime} | {movie?.rating}</p>
        <p>{new Date(movie.release_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>
        <button className="red-btn">Get Tickets</button>
      </div>
      </NavLink>
    )
}

export default MovieCard