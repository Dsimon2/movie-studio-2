import React, {useEffect, useState} from "react"
import "./MovieItem.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    // State to store the list of movies
    const [movieList, setMovieList] = useState([]);

 // Extracting the "type" parameter from the route
 const { type } = useParams();
 
 // Fetch movies when the component mounts
 useEffect(() => {
    getMovies();
}, []);

// Fetch movies when the "type" parameter changes
useEffect(() => {
    getMovies();
}, [type]);

// Fetch movies from the API
const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=07bb03709d728fbe5f83a335b1d729a5&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
};

return (
    <>
        {/* Movie list section */}
        <div className="movie__list">
            {/* Display the movie list title */}
            <h3 className="movie__title">{type ? type : "Top Rated"}</h3>
            {/* Container for movie cards */}
            <div className="movie__box">
                {/* Map through the movieList array and render Cards components */}
                {movieList.map(movie => (
                    <Cards movie={movie} key={movie.id} /> // Adding a unique key for each movie
                ))}
            </div>
        </div>
    </>
);
};

export default MovieList;