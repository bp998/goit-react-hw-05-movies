import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesSearch.module.css';

export const MoviesSearch = () => {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieId = location.state;

  useEffect(() => {
    const search = searchParams.get('movie');
    if (search) {
      console.log(search);
    }
  }, [searchParams]);

  useEffect(() => {
    if (location.search === '?' + movieId) {
      console.log(location.search);
    }
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ movie: input.toLocaleLowerCase() });
  };

  return (
    <div className={location.search === `?` + movieId ? css.hidden : ''}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your movie name"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button onClick={e => {}} type="submit">
          Click to search
        </button>
      </form>
    </div>
  );
};
