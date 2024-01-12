import { getMovieDetails } from 'api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(movieInfo => setMovieDetails(movieInfo))
      .catch(error => console.error(error))
      .finally(setLoading(false));
  }, [movieId]);
  const { original_title, vote_average, overview, genres, poster_path } =
    movieDetails;
  //   console.log(movieDetails);
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">GO BACK</button>
      </Link>
      {loading && <Loader />}
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={original_title}
      />
      <div>
        <h2>{original_title}</h2>
        <h3>Rating: {vote_average && vote_average.toFixed(1)}</h3>
        <p>{overview}</p>
        {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
