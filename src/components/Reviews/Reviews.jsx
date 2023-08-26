import { getMovieReviews } from 'fetchAPI';
import { useEffect, useState } from 'react';

export const Reviews = props => {
  const [movie, setMovie] = useState([]);

  const { isVisible, movieId } = props;

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieReviews(movieId);
          console.log(response, 'response log');
          setMovie(response.results);
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  console.log(movie);
  console.log(isVisible, 'reviews');

  return (
    <div>
      {isVisible ? movie.map(el => <li key={el.id}>{el.author}</li>) : null}
      <div> {movie.length === [] ? <p>There is no reviews</p> : null} </div>
    </div>
  );
};
