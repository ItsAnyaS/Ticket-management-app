import { useState, useEffect } from "react"
const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState()
    const [movies, setMovies] = useState([])
    const getData = async () => {
        let req = await fetch( searchTerm ? `http://localhost:3000/sorted_movies/${searchTerm}` : 'http://localhost:3000/movies')
        let res = await req.json()
        console.log(res)
        setMovies(res)
    }
    
    useEffect(()=> {
      

        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchTerm)
        getData()
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> {setSearchTerm(e.target.value)}} />
            <button>Search</button>
        </form>
        <h2>Movies matching your search:</h2>
        {movies.map(movie => {
    return (
      <div key={movie.id}>
        <img/>
        <h4>{movie?.title}</h4>
        <p>{movie?.runtime}</p>
        <p>{movie?.rating}</p>
      </div>
    )
  })}
    </div>
)
}

export default SearchPage