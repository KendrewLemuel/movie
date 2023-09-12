import React, { useEffect, useState } from "react";
import "./Popular.css";
import { getMovie, searchMovie } from "../Api/Api";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Popular = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
        <Link
          to={`movie/${movie.id}`}
          style={{ textDecoration: "none", color: "#fff" }}
          key={i}
        >
          <div className="populars">
            <img
              className="popular-img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt={movie ? movie.original_title : ""}
            />
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="none" />
              </svg>
            </div>
            <div className="popular-container">
              <div className="popular-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="popular-date">
                {movie ? movie.release_date : ""}
              </div>
              <span className="popular-rate">
                {movie ? movie.vote_average : ""}⭐
              </span>
              <div className="popular-desc">{movie ? movie.overview : ""}</div>
            </div>
          </div>
        </Link>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
      console.log({ query: query });
    } else {
      getMovie().then((result) => {
        setPopularMovie(result);
      });
    }
  };

  return (
    <>
      <section className="movie-sec">
        <div className="movie-head">
          <div className="logo-img">
            <h1>search movie here </h1>
          </div>
          <input
            className="input"
            type="text"
            placeholder="movie title"
            onChange={({ target }) => search(target.value)}
          />
        </div>
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </section>
    </>
  );
};

export default Popular;
