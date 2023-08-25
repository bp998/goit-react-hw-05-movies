import { fetchTrendingMovies } from 'fetchAPI';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies.results);
    };

    fetchData();
  }, []);

  console.log(trendingMovies);

  return (
    <div>
      Home
      <ul>
        {trendingMovies.map(el => {
          <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
