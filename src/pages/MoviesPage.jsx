import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Movies from '../components/Movies/Movies';
import { getSearchMovies } from 'api/api';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesTitle = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };
  useEffect(() => {
    if (!moviesTitle) return;

    setLoading(true);
    getSearchMovies(moviesTitle)
      .then(movieByQuery => {
        // console.log(movieByQuery);
        setMovies(movieByQuery);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesTitle]);
  return (
    <>
      <h1>Search for your movie</h1>
      {error && <h2>{error.message}</h2>}
      <SearchForm value={moviesTitle} onSearch={handleOnSubmit} />
      {movies.length > 0 && (
        <Movies movies={movies}>
          <Outlet />
        </Movies>
      )}
      {loading && <Loader />}
    </>
  );
};

export default MoviesPage;
