import { NavLink, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { BtnBack, FilmCardBox, ImageBox } from './FilmCard.styled';
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

export const FilmCard = ({ detailMovie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <FilmCardBox>
      <ImageBox>
        <img
          src={
            detailMovie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`
              : ``
          }
          alt={detailMovie.id}
          width="500px"
          height="500px"
        />
        <BtnBack>
          <StyledLink to={backLinkLocationRef.current}>back</StyledLink>
        </BtnBack>
      </ImageBox>

      <div>
        <div>
          <h2>
            {detailMovie.title}({detailMovie.release_date})
          </h2>
          <span>User Score:{detailMovie.vote_average} %</span>
          <h3>Overview</h3>
          <span>{detailMovie.overview}</span>
          <h3>Genres</h3>
          {detailMovie.genres !== undefined && (
            <ul>
              {detailMovie.genres.map(genres => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </FilmCardBox>
  );
};

FilmCard.propTypes = {
  detailMovie: PropTypes.object.isRequired,
};
