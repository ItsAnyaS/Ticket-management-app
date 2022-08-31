import MovieCard from "./MovieCard"
import { MovieContext } from "./App"
import { useState, useEffect, useContext } from "react"
import './SearchPage.css'
const SearchPage = () => {
    const {globalMovie, setGlobalMovie} = useContext(MovieContext)
    const [searchTerm, setSearchTerm] = useState()
    const [theater, setTheater] = useState('none')
    const [movies, setMovies] = useState([])
    const [allTheaters, setAllTheaters] = useState([])
    const getData = async () => {
        let req = await fetch( searchTerm ? `http://localhost:3000/sorted_movies/${searchTerm}/${theater}` : 'http://localhost:3000/movies')
        let res = await req.json()
        setMovies(res)
    }

    const getTheaters = async() => {
        let req = await fetch('http://localhost:3000/theaters')
        let res = await req.json()
        setAllTheaters(res)
        console.log(res)
    }

    useEffect(()=> {
      
        getTheaters()
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }

    const handleChange = (e) => {
        let term = e.target.value
       term = term.replace(' ', '-')
        setSearchTerm(term)
    }

    const handleTheaterChange = (e) => {
        let term = e.target.value
        setTheater(term)
        setGlobalMovie({
            ...globalMovie,
            theater: term
        })
        console.log(globalMovie)
    }
return (
    <div className="search">
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='Find a movie...'/>
            <select onChange={handleTheaterChange}>
                <option value ='none' defaultValue>---select a theater---</option>
                { allTheaters.map(theater => {
            let theaterParams = theater?.name.replace(' ', '-')
            return (
                <option key={theater.id} value={theaterParams}>{theater?.name}</option>
            )
        })}
            </select>
            <button>Search</button>
        </form>
        <h2>Movies matching your search:</h2>
        <div className="search-movie-container" >
        {movies.map(movie => {
    return (
      <MovieCard movie={movie} />
    )
  })}
  </div>
    </div>
)
}

export default SearchPage