import React, { useEffect, useState } from "react";
import "./Movie.css"; // Importing CSS styles for the Movie component
import { useParams } from "react-router-dom"; // Importing useParams for extracting URL parameters

const Movie = () => {
  // State to store the current movie's details
  const [currentMovieDetail, setMovie] = useState();

  // Extracting the 'id' parameter from the URL
  const { id } = useParams();

  // Fetch movie details when the component mounts
  useEffect(() => {
    getData();
  
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  // Function to fetch movie details from the API
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=07bb03709d728fbe5f83a335b1d729a5&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        {/* Movie backdrop image */}
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.poster_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          {/* Place for additional movie poster content */}
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            {/* Movie name */}
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            {/* Movie tagline */}
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            {/* Movie rating and vote count */}
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            {/* Movie runtime */}
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            {/* Movie release date */}
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            {/* Movie revenue */}
            <div className="movie__revenue">
              {currentMovieDetail
                ? "Revenue: $" + currentMovieDetail.revenue.toLocaleString()
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            {/* Summary section */}
            <div className="summaryText">Summary</div>
            <div>
              {/* Movie overview */}
              {currentMovieDetail ? currentMovieDetail.overview : ""}
            </div>
            <div className="movie__genres">
              {/* Display movie genres */}
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <span className="movie__genre" key={genre.id}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
            <div className="movie__links">
              {/* Link to the movie's homepage */}
              {currentMovieDetail && currentMovieDetail.homepage && (
                <a
                  href={currentMovieDetail.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span className="movie__homeButton movie__Button">
                      Movie site{" "}
                      <i className="newTab fas fa-external-link-alt"></i>
                    </span>
                  </p>
                </a>
              )}
              
              {/* Link to the movie's IMDb page */}
              {currentMovieDetail && currentMovieDetail.imdb_id && (
                <a
                  href={
                    "https://www.imdb.com/title/" + currentMovieDetail.imdb_id
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span className="movie__imdbButton movie__Button">
                      IMDb<i className="newTab fas fa-external-link-alt"></i>
                    </span>
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
