import { Link, useLocation } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';

const Movies = ({ movies }) => {
  //   console.log(movies);
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
              ) : (
                <AiOutlineFileImage size={200} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
