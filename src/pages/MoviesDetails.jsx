import { getMovieDetails } from 'api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalItem,
  AdditionalList,
  AdditionalTitle,
  Button,
  LinkBackBtn,
  MoviesDetailContainer,
} from './MoviesDetails.styled';

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
      <LinkBackBtn to={location.state?.from ?? '/'}>
        <Button type="button">GO BACK</Button>
      </LinkBackBtn>
      {loading && <Loader />}
      <MoviesDetailContainer>
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
      </MoviesDetailContainer>
      <div>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalList>
          <AdditionalItem>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </AdditionalItem>
          <AdditionalItem>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </AdditionalItem>
        </AdditionalList>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
