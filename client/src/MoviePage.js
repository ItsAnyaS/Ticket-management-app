import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from "react-router-dom";

const MoviePage = () => {
    const [movie, setMovie] = useState({})
    // let { id } = useParams();

    useEffect(()=> {
        const getMovie = async () => {
        let req = await fetch(`http://localhost:3000/movie/1`)
        let res = await req.json()
        setMovie(res)
        console.log(res)
        }
        getMovie()
    },[])

    // let navigate = useNavigate();

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
            <button onClick={() => handleClick()}>Get Tickets</button>
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