import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {
// State to manage loading state
    const [isLoading, setIsLoading] = useState(true)

// Simulate loading delay and update isLoading after 1.5 seconds
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

return <>
    {
        isLoading
        ?
         // Display skeleton animation during loading
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={200} duration={3} />
            </SkeletonTheme>
        </div>
 :
 // Display movie card when loading is complete
 <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
     <div className="cards">
     {/* Display movie poster */}
         <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
         
         {/* Overlay with additional movie information */}
         <div className="cards__overlay">

         {/* Display release date and rating */}
         <div className="card__runtime">
                 {movie?movie.release_date:""}
                 <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
             </div>
             
             {/* Display movie title */}
             <div className="card__title">{movie?movie.original_title:""}</div>
            
             {/* Display truncated movie description */}
             <div className="card__description">{movie ? movie.overview.slice(0,180)+"..." : ""}</div>
         </div>
     </div>
 </Link>
}
</>
}

export default Cards