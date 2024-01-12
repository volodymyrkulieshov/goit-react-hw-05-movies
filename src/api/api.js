import axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3';

const APIKEY = '55a48febb45b5475689763bd95744d57';

export const getAllMovies = async () => {
  const url = `${BASEURL}/trending/movie/day?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data.results;
};

export async function getMovieDetails(movieId) {
  const url = `${BASEURL}/movie/${movieId}?api_key=${APIKEY}`;
  const { data } = await axios.get(url);
  return data;
}
