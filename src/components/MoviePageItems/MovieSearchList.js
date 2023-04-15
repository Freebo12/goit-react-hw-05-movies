import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, MovieListItem } from './MoviePageItems.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;
  width: 130px;
  height: 40px;
  font-weight: 700;
  :hover {
    color: black;
  }
`;

export const MovieSearchList = ({ films }) => {
  const location = useLocation();

  return (
    <MovieList>
      {films.map(film => (
        <MovieListItem key={film.id}>
          <StyledLink
            key={film.id}
            to={`${film.id}`}
            state={{ from: location }}
          >
            <span>{film.title}</span>
          </StyledLink>
        </MovieListItem>
      ))}
    </MovieList>
  );
};

MovieSearchList.propTypes = {
  films: PropTypes.array.isRequired,
};
