import MovieCard from './MovieCard'
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    const [randomMovie, setRandomMovie] = useState()
    const [movies, setMovies] = useState([])
  
  useEffect(()=> {
    const getRandomMovie = async() => {
      let req = await fetch('http://localhost:3000/random_movie')
      let res = await req.json()
      console.log(res)
      setRandomMovie(res)
    }
    getRandomMovie()
  
    const getMovies = async () => {
      let req = await fetch('http://localhost:3000/random_movies_5')
      let res = await req.json()
      setMovies(res)
      console.log(res)
    }
  
    getMovies()
  },[])
    return (
      <div className="App">
       
        <div className='hero'>
          <h2>{randomMovie?.title}</h2>
          <p>Short blerb about how greate the movie is and why you should spend money on it.</p>
          <NavLink to='/search'> <button>Get Tickets</button></NavLink>
        </div>
  
  <div className='now-showing'>
    <h3>Now showing</h3>
    <div className='movie-container'>
  
   
  {movies.map(movie => {
    return (
      <MovieCard movie={movie} />
    )
  })}
   </div>
  </div>
      </div>
    );
}

export default Home