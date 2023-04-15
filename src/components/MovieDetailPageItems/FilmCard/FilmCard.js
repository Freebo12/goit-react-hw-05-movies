import { NavLink, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  BtnBack,
  FilmCardBox,
  ImageBox,
  FilmTitle,
  SubTitle,
  Paragraph,
  ListGenresItem,
  ListGenres,
} from './FilmCard.styled';

import styled from 'styled-components';
import NoFound from 'img/Image_not_available.png';

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
            detailMovie.poster_path !== null &&
            detailMovie.poster_path !== undefined
              ? `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`
              : `${NoFound}`
          }
          alt={detailMovie.id}
          width="500px"
          height="auto"
        />
        <BtnBack>
          <StyledLink to={backLinkLocationRef.current}>back</StyledLink>
        </BtnBack>
      </ImageBox>

      <div>
        <FilmTitle>
          {detailMovie.title}({detailMovie.release_date})
        </FilmTitle>
        <SubTitle>User Score</SubTitle>
        <Paragraph>{detailMovie.vote_average}%</Paragraph>
        <SubTitle>Overview</SubTitle>
        <Paragraph>{detailMovie.overview}</Paragraph>
        <SubTitle>Genres</SubTitle>
        {detailMovie.genres !== undefined && (
          <ListGenres>
            {detailMovie.genres.map(genres => (
              <ListGenresItem key={genres.id}>{genres.name}</ListGenresItem>
            ))}
          </ListGenres>
        )}
      </div>
    </FilmCardBox>
  );
};

FilmCard.propTypes = {
  detailMovie: PropTypes.object.isRequired,
};
