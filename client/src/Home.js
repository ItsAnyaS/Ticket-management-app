import MovieCard from './MovieCard'
import {useState, useEffect, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { MovieContext } from './App'
import './Home.css'

const Home = () => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [randomMovie, setRandomMovie] = useState()
    const [movies, setMovies] = useState([])
  
  useEffect(()=> {
    const getRandomMovie = async() => {
      let req = await fetch('http://localhost:3000/random_movie')
      let res = await req.json()
      setRandomMovie(res)
    }
    getRandomMovie()
  
    const getMovies = async () => {
      let req = await fetch('http://localhost:3000/random_movies_5')
      let res = await req.json()
      setMovies(res)
    }
  
    getMovies()
    console.log(globalMovie)
  },[])
    return (
      <div className="home">
        <div className='hero'>
          <div className='img-container'>
          <img src='./homeBG.webp' className='banner-img'/>
          <div className='img-floating-div'>
          <h2>{randomMovie?.title}</h2>
          <p>We come to this place for magic. We come to Random Movie app Theaters to laugh, to cry, to care. Because we need that. All of us. That indescribable...</p>
          <NavLink to='/search'> <button className='red-btn'>Get Tickets</button></NavLink>
          </div>
          </div>
        </div>
    <h3 className='now-showing-header'>Now showing</h3>
  <div className='now-showing'>
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