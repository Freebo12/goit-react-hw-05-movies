import PropTypes from 'prop-types';

export const InfoCastList = ({ detail }) => {
  return (
    <ul>
      {detail.map(actor => (
        <li key={actor.id}>
          <span>{actor.name}</span>
          <img
            src={
              actor.profile_path !== null
                ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                : `zagluszka`
            }
            alt={actor.name}
            width="75px"
            height="100px"
          />
          <span>{actor.character}</span>
        </li>
      ))}
    </ul>
  );
};

InfoCastList.propTypes = {
  detail: PropTypes.array.isRequired,
};
