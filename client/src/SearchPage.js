import MovieCard from "./MovieCard"

import { useState, useEffect } from "react"
const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState()
    const [theater, setTheater] = useState()
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
        console.log(searchTerm)
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
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} />
            <select onChange={handleTheaterChange}>
                <option selected>---select a theater---</option>
                { allTheaters.map(theater => {
            let theaterParams = theater?.name.replace(' ', '-')
            return (
                <option key={theater?.id} value={theaterParams}>{theater?.name}</option>
            )
        })}
            </select>
            <button>Search</button>
        </form>
        <h2>Movies matching your search:</h2>
        {movies.map(movie => {
    return (
      <MovieCard movie={movie} />
    )
  })}
    </div>
)
}

export default SearchPage