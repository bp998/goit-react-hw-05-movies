import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesList.module.css';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'fetchAPI';

export const MoviesList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('movie');

  useEffect(() => {
    if (movieName === null) return;
    else {
      (async () => {
        try {
          const response = await getMovieSearch(movieName);
          setMovies(response);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [searchParams]);

  return (
    <div className={location.search === '?redirected=true' ? css.hidden : ''}>
      <ul className={css.movieList}>
        {movies.map(el => (
          <Link key={el.id}>{el.title || el.name}</Link>
        ))}
      </ul>
    </div>
  );
};
