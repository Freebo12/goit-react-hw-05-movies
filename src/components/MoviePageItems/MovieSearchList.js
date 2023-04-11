import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieSearchList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <Link key={film.id} to={`${film.id}`}>
          <li key={film.id}>{film.title}</li>
        </Link>
      ))}
    </ul>
  );
};

MovieSearchList.propTypes = {
  films: PropTypes.array.isRequired,
};
