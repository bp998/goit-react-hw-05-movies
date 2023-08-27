import Loading from 'components/Loading/Loading';
import { getTrendingMovies } from 'fetchAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(el => (
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
