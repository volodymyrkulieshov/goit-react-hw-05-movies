import { getMovieReviews } from 'api/api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ReviewsItem } from './Reviews.styled';

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

  return (
    <>
      {loading && <Loader />}
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};

export default Reviews;
