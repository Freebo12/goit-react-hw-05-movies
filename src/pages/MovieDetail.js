import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { OneMovieDetail } from '../components/services/GetMoive';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    OneMovieDetail(movieId)
      .then(resp => resp.json())
      .then(movie => {
        setDetailMovie(movie);
      });
  }, [movieId]);
  return (
    <>
      <Link to={`/`}>back</Link>
      <div>
        <div>
          <h2>
            {detailMovie.title}({detailMovie.release_date})
          </h2>
          <span>User Score:{detailMovie.vote_average} %</span>
          <h3>Overview</h3>
          <span>{detailMovie.overview}</span>
          <h3>Genres</h3>
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
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailPage;
