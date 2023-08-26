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

  console.log(trendingMovies);

  return (
    <div>
      <ul>
        {trendingMovies.map(el => (
          <Link
            style={{ display: 'flex', padding: '5px' }}
            to={() => {}}
            key={el.id}
          >
            {el.title || el.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
