import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieItem";

const Home = () => {
    // State to store the list of popular movies
    const [Movies, setMovies] = useState([]);

    // Fetch popular movies when the component mounts
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=07bb03709d728fbe5f83a335b1d729a5&language=en-US")
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <>
            <div className="movie">
                {/* Carousel to display popular movie backdrops */}
                <Carousel
                    transitionTime={4}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    autoPlay={true}

                    >
                    {/* Map through the Movies array and render movie backdrops */}
                    {Movies.map(movie => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                            {/* Movie backdrop image */}
                            <div className="movie">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>

                             {/* Movie details overlay */}
                             <div className="overlay">
                                {/* Movie title */}
                                <div className="movie__title">{movie ? movie.original_title : ""}</div>
                                {/* Movie runtime and other information */}
                                <div className="movie__runtime">
                                    {movie ? movie.release_date : ""}
                                    {/* Additional movie information can be added here */}
                                </div>