import { Link, useLocation } from 'react-router-dom';

const Movies = ({ movies }) => {
  //   console.log(movies);
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`./movies/${id}`}>
              {title}
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt="title"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
