import React, {useEffect, useState} from "react"
import "./MovieItem.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    // State to store the list of movies
    const [movieList, setMovieList] = useState([]);

    