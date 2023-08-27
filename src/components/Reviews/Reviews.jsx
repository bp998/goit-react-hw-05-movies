import { getMovieReviews } from 'fetchAPI';
import { useEffect, useState } from 'react';

export const Reviews = props => {
  const [movieInfo, setMovieInfo] = useState([]);

  const { isVisible, movieId } = props;

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieReviews(movieId);
          // console.log(response, 'response log');
          setMovieInfo(response.results);
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  console.log(movieInfo.length);
  console.log(isVisible, 'isVisible');

  return (
    <div>
      {isVisible ? movieInfo.map(el => <li key={el.id}>{el.author}</li>) : null}
      {isVisible && movieInfo.length === 0 ? <p>There is no reviews</p> : null}
    </div>
  );
};
