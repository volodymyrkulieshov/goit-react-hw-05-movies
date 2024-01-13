import { getAllMovies } from 'api/api';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies/Movies';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then(setMovies)
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  //   console.log(movies);
  return (
    <>
      {error && <h3>{error.message}</h3>}
      <h1>Trending today</h1>
      <Movies movies={movies}>
        <Outlet />
      </Movies>
      {loading && <Loader />}
    </>
  );
};

export default Home;
