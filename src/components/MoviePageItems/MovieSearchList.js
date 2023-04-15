import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieSearchList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <Link key={film.id} to={`${film.id}`} state={{ from: location }}>
          <li key={film.id}>{film.title}</li>
        </Link>
      ))}
    </ul>
  );
};

MovieSearchList.propTypes = {
  films: PropTypes.array.isRequired,
};
