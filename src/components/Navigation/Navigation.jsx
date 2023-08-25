import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <NavLink to={'/goit-react-hw-05-movies/'}>Home</NavLink>
        <NavLink to={'/goit-react-hw-05-movies/movies'}>Movies</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
