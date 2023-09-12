import React, { useEffect, useState } from "react";
import "./Hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const HeroSec = () => {
  const [popularMovies, setPopularMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=64617cc851be15168561160cec746f06"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovie(data.results));
  }, []);

  return (
    <>
      <div className="tumbnail">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="tumbnail-img">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>
              <div className="tumb-container">
                <div className="tumb-title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="tumb-date">
                  {movie ? movie.release_date : ""}
                </div>
                <span className="tumb-rate">
                  {movie ? movie.vote_average : ""}⭐
                </span>
                <div className="tumb-desc">{movie ? movie.overview : ""}</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HeroSec;
