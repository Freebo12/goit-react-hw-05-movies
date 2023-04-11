import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import PageMovie from 'pages/Movies';
import MovieDetailPage from 'pages/MovieDetail';
import { Layout } from './Layout';
import { InfoCast } from './MovieDetailPageItems/InfoCast/InfoCast';
import { InfoReview } from './MovieDetailPageItems/InfoReview/InfoReview';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<PageMovie />} />
          <Route path="movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<InfoCast />} />
            <Route path="reviews" element={<InfoReview />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
