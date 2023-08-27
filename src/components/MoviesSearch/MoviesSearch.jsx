import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesSearch.module.css';

export const MoviesSearch = () => {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieId = location.state;

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ movie: input.toLocaleLowerCase() });
    if (searchParams > 0) {
      return;
    }
  };

  return (
    <div className={location.search === `?` + movieId ? css.hidden : ''}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Type your movie name"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button className={css.button} onClick={e => {}} type="submit">
          🔍
        </button>
      </form>
    </div>
  );
};
