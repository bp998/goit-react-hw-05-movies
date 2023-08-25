import { useEffect, useState } from 'react';
import { api } from 'fetchAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(trendingMovies);

  return (
    <div>
      Home
      <ul>
        {trendingMovies.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
