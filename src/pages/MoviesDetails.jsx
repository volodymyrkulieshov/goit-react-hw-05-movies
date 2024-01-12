import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const buttonBack = useEffect(() => {}, []);
  return <div></div>;
};

export default MoviesDetails;
