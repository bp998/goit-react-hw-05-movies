import { getMovieCredits } from 'fetchAPI';
import { useEffect, useState } from 'react';

export const Cast = props => {
  const [movie, setMovie] = useState([]);
  const { isVisible, movieId } = props;

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieCredits(movieId);
          setMovie(response.cast);
          console.log(movie, 'response log');
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  console.log(isVisible, 'cast');

  return (
    <div>
      <div>
        {isVisible
          ? movie.map(el => <li key={el.id}>{el.character}</li>)
          : null}
        {movie === [] ? <div>There is no cast</div> : null}
      </div>
    </div>
  );
};
