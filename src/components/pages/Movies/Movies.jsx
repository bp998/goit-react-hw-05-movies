import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';

export const Movies = () => {
  return (
    <div>
      <MoviesSearch />
      <MoviesList />
    </div>
  );
};
