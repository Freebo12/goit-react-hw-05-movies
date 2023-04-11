import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const HomePageList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <Link to={`movies/${film.id}`} key={film.id}>
          <li>
            {film.title}
            {film.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

HomePageList.propTypes = {
  films: PropTypes.array.isRequired,
};
