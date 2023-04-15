import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { OneMovieDetail } from '../components/services/GetMoive';
import { FilmCard } from 'components/MovieDetailPageItems/FilmCard/FilmCard';
import { SubList } from 'components/MovieDetailPageItems/SubList/SubList';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState({});

  const location = useLocation();

  useEffect(() => {
    OneMovieDetail(movieId)
      .then(resp => resp.json())
      .then(movie => {
        setDetailMovie(movie);
      });
  }, [movieId]);

  return (
    <>
      <FilmCard detailMovie={detailMovie} />
      <SubList />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      ;
    </>
  );
};

export default MovieDetailPage;
