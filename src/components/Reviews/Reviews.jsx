import { getMovieReviews } from 'api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  //   console.log(movieReviews);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(({ results }) => {
        // console.log(results);
        setMovieReviews(results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  //   useEffect(() => {
  //     setLoading(true);
  //     getMovieReviews(movieId)
  //       .then(({ review }) => {
  //         //   console.log(cast);
  //         setMovieReview(review);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};

export default Reviews;
