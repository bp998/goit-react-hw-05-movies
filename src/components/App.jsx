import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Movies } from './pages/Movies/Movies';
import Home from './pages/Home/Home';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

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
          <Route
            path="/goit-react-hw-05-movies/movies/cast"
            element={<Cast />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/reviews"
            element={<Reviews />}
          />
        </Route>
      </Routes>
    </div>
  );
};
