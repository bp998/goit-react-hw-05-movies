import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
