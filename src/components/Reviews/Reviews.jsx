import { getMovieReviews } from 'fetchAPI';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';

export const Reviews = props => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { isVisible, movieId } = props;

  useEffect(() => {});

  useEffect(() => {
    if (isVisible) {
      (async () => {
        try {
          const response = await getMovieReviews(movieId);
          setMovieInfo(response.results);
        } catch (err) {
          console.log(err, 'error w useEffect');
        }
      })();
    }
  }, [isVisible, movieId]);

  if (isVisible) {
    return (
      <div>
        <h3 className={css.reviewsTitle}>Reviews</h3>
        <ul>
          {isVisible
            ? movieInfo.map(el => (
                <li className={css.listItem} key={el.id}>
                  <p className={css.author}>{el.author}:</p>
                  <p className={css.text}>{el.content}</p>
                  <span className={css.rateCard}>
                    <span className={css.rate}>Rate</span>
                    {': '}
                    {el.author_details.rating} / 10
                  </span>
                </li>
              ))
            : null}
          {isVisible && movieInfo.length === 0 ? (
            <p>There is no reviews</p>
          ) : null}
        </ul>
      </div>
    );
  }
};
