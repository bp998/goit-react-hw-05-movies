import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import { Navigation } from './Navigation/Navigation';
import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/goit-react-hw-05-movies/'} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path={'/goit-react-hw-05-movies/movies'}
            element={<Movies />}
          />
        </Route>
      </Routes>
    </div>
  );
};
