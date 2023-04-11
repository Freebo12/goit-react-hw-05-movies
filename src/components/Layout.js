import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Search</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
