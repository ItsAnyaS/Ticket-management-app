import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MovieContext } from "./App"
const MovieCard = ({movie}) => {

const {globalMovie, setGlobalMovie} = useContext(MovieContext)
const handleClick = () => {
  setGlobalMovie(movie)
}
  
    return (
      <NavLink to='/' onClick={handleClick}>
        <div key={movie?.id}>
        <img/>
        <h4>{movie?.title}</h4>
        <p>{movie?.runtime}</p>
        <p>{movie?.rating}</p>
      </div>
      </NavLink>
    )
}

export default MovieCard