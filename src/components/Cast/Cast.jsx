import { getMovieCredits } from 'fetchAPI';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';
import No_image_poster from 'No_image_poster.png';

export const Cast = props => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { isVisible, movieId } = props;

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieCredits(movieId);
          setMovieInfo(response.cast);
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  if (isVisible) {
    return (
      <div className={css.castCard}>
        <h3 className={css.castTitle}>Cast</h3>
        <ul className={css.castList}>
          {isVisible
            ? movieInfo.slice(0, 20).map(el => (
                <li className={css.listItem} key={el.id}>
                  <img
                    width="150"
                    src={
                      el.profile_path
                        ? `https://image.tmdb.org/t/p/original` +
                          el.profile_path
                        : `${No_image_poster}`
                    }
                    alt={el.original_name}
                  />
                  <p className={css.actorName}>{el.original_name}</p>
                  <span>
                    <span>as</span> {el.character}
                  </span>
                </li>
              ))
            : null}
          {isVisible && movieInfo.length === 0 ? (
            <p>There is no information about cast</p>
          ) : null}
        </ul>
      </div>
    );
  }
};
