import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesList.module.css';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'fetchAPI';

export const MoviesList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const movieId = location.state;

  const movieName = searchParams.get('movie');

  useEffect(() => {
    if (movieName) {
      (async () => {
        try {
          const response = await getMovieSearch(movieName);
          setMovies(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [movieName]);

  return (
    <div className={location.search === `?${movieId}` ? css.hidden : ''}>
      <ul>
        {movies.map(el => (
          <Link
            style={{ display: 'flex', padding: '5px' }}
            to={`/goit-react-hw-05-movies/movies?` + el.id}
            key={el.id}
            state={el.id}
          >
            {el.title || el.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
