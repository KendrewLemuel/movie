import axios from "axios";

const apikey = "64617cc851be15168561160cec746f06";
const baseurl = "https://api.themoviedb.org/3";

export const getMovie = async () => {
  const movie = await axios.get(
    `${baseurl}/movie/popular?page=1&api_key=${apikey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`
  );
  return search.data;
};
