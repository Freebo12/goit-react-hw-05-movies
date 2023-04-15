import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';

export const FilmCard = ({ detailMovie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <div>
      <button>
        <Link to={backLinkLocationRef.current}>back</Link>
      </button>
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
        <div>
          <img
            src={
              detailMovie.poster_path !== null
                ? `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`
                : ``
            }
            alt={detailMovie.id}
            width="250px"
            height="250px"
          />
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  detailMovie: PropTypes.object.isRequired,
};
