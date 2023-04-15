import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Header, NavBtn, Footer } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: grey;
  width: 130px;
  height: 40px;
  font-weight: 400;
  &.active {
    color: black;
    font-weight: 900;
  }
`;

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header>
        <nav>
          <NavBtn>
            <StyledLink to="/">Home</StyledLink>
          </NavBtn>
          <NavBtn>
            <StyledLink to="/movies">Search</StyledLink>
          </NavBtn>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
};
