import axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3';

const APIKEY = '55a48febb45b5475689763bd95744d57';

export async function getAllMovies() {
  const url = `${BASEURL}/trending/movie/day?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data.results;
}

export async function getMovieDetails(movieId) {
  const url = `${BASEURL}/movie/${movieId}?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data;
}
export async function getMovieCast(movieId) {
  const url = `${BASEURL}/movie/${movieId}/credits?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data;
}
export async function getMovieReviews(movieId) {
  const url = `${BASEURL}/movie/${movieId}/reviews?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getSearchMovies(query) {
  const url = `${BASEURL}/search/movie?api_key=${APIKEY}&query=${query}`;
  const { data } = await axios.get(url);
  return data.results;
}
