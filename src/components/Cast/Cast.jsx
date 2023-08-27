import { getMovieCredits } from 'fetchAPI';
import { useEffect, useState } from 'react';

export const Cast = props => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { isVisible, movieId } = props;

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieCredits(movieId);
          setMovieInfo(response.cast);
          // console.log(movieInfo, 'response log');
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  console.log(isVisible, 'isVisible cast');
  console.log(movieInfo.length, 'movieInfo.lenght cast');

  return (
    <div>
      <div>
        {isVisible
          ? movieInfo.map(el => <li key={el.id}>{el.character}</li>)
          : null}
        {isVisible && movieInfo.length === 0 ? (
          <p>There is no information about cast</p>
        ) : null}
      </div>
    </div>
  );
};
