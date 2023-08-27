import { useLocation, useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { getMovieDetail } from 'fetchAPI';
import { Reviews } from 'components/Reviews/Reviews';
import { Cast } from 'components/Cast/Cast';
import No_image_poster from 'No_image_poster.png';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [isCastVisible, setCastIsVisible] = useState(false);
  const [areReviewsVisible, setReviewsAreVisible] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();

  const movieId = location.state;

  const toggleCastVisible = () => {
    setCastIsVisible(!isCastVisible);
    if (areReviewsVisible === true) {
      setReviewsAreVisible(false);
    }
  };

  const toggleReviewsVisible = () => {
    setReviewsAreVisible(!areReviewsVisible);
    if (isCastVisible === true) {
      setCastIsVisible(false);
    }
  };

  const goBack = () => {
    setCastIsVisible(false);
    setReviewsAreVisible(false);
    navigation(-1);
  };

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
      <div className={location.search === `?` + movieId ? '' : css.hidden}>
        <button className={css.goBackButton} onClick={goBack}>
          ⬅ Go back
        </button>
        <div className={css.movieCard}>
          <img
            width="300"
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                : `${No_image_poster}`
            }
          ></img>
          <div className={css.detailsCard}>
            <h3 className={css.title}>{movie.original_title}</h3>
            <span className={css.userScore}>
              User Score:
              {movie.vote_average > 0
                ? ` ${movie.vote_average.toFixed(1) * 10}% positive feedback`
                : null}
            </span>
            <p className={css.overview}>Overview</p>
            <p className={css.overviewText}>{movie.overview}</p>
            <div className={css.genresCard}>
              <p className={css.genres}>Genres:</p>
              <ul className={css.genresList}>
                {movie.genres.length > 0
                  ? movie.genres.map(el => (
                      <span key={el.id} className={css.genre}>
                        {el.name}
                      </span>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className={css.additionalCard}>
          <p>Additional informations</p>
          <span className={css.btn} onClick={toggleCastVisible}>
            Cast
          </span>
          <span className={css.btn} onClick={toggleReviewsVisible}>
            Reviews
          </span>
        </div>
        <Cast movieId={movieId} isVisible={isCastVisible} />
        <Reviews movieId={movieId} isVisible={areReviewsVisible} />
      </div>
    );
  }
};
