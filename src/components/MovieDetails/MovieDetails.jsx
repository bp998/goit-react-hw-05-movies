import { useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { getMovieDetail } from 'fetchAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();

  //   console.log(location);

  const movieId = location.state;
  console.log(location.search);

  useEffect(() => {
    if (movieId) {
      (async () => {
        try {
          const response = await getMovieDetail(movieId);
          setMovie(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [movieId]);

  if (movie) {
    return (
      <div
        className={
          location.search === `?redirected=true` + movieId ? '' : css.hidden
        }
      >
        <div className={css.movieCard}>
          <img
            width="300"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
          ></img>
          <div className={css.detailsCard}>
            <h3>{movie.original_title}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};
