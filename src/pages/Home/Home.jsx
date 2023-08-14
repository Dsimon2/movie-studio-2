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
