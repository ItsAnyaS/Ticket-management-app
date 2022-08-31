const MovieCard = ({movie}) => {
    return (
        <div key={movie?.id}>
        <img/>
        <h4>{movie?.title}</h4>
        <p>{movie?.runtime}</p>
        <p>{movie?.rating}</p>
      </div>
    )
}

export default MovieCard