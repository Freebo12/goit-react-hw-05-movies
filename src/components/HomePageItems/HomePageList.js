import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendListItem, TrendList } from './HomePageItems.styled';
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

export const HomePageList = ({ films }) => {
  return (
    <TrendList>
      {films.map(film => (
        <TrendListItem key={film.id}>
          <StyledLink to={`movies/${film.id}`}>
            <span>
              {film.title}
              {film.name}
            </span>
          </StyledLink>
        </TrendListItem>
      ))}
    </TrendList>
  );
};

HomePageList.propTypes = {
  films: PropTypes.array.isRequired,
};
