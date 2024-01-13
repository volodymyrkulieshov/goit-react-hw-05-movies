import { Link, useLocation } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import { Card, Img, MovieItem, MoviesList } from './Movies.styled';

const Movies = ({ movies }) => {
  //   console.log(movies);
  const location = useLocation();
  return (
    <>
      <MoviesList>
        {movies.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Card>
                {poster_path ? (
                  <Img
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <AiOutlineFileImage size={200} />
                )}
                {title}
              </Card>
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
    </>
  );
};

export default Movies;
