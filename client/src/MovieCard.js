import { NavLink } from "react-router-dom"
const MovieCard = ({movie}) => {
    return (
      <NavLink to='/movie'>
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