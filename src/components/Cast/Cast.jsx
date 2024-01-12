import { getMovieCast } from 'api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieCast(movieId)
      .then(({ cast }) => {
        //   console.log(cast);
        setMovieCast(cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      <ul>
        {movieCast.map(({ id, profile_path, character, name }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            )}
            <p>
              <span> Actor: </span> {name}
            </p>
            <p>
              <span>Character: </span> {character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
