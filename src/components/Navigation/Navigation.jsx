import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <NavLink className={css.link} to={'/goit-react-hw-05-movies/'}>
          Home
        </NavLink>
        <NavLink className={css.link} to={'/goit-react-hw-05-movies/movies'}>
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
