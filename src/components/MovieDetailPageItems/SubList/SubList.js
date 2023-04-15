import { Link } from 'react-router-dom';

export const SubList = () => {
  return (
    <ul>
      <li>
        <Link to="Cast">Cast</Link>
      </li>
      <li>
        <Link to="Reviews">Review</Link>
      </li>
    </ul>
  );
};
