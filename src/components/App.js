import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { NotFound } from './NotFound/NotFound';

const Home = lazy(() => import('../pages/Home'));
const PageMovie = lazy(() => import('../pages/Movies'));
const MovieDetailPage = lazy(() => import('../pages/MovieDetail'));
const InfoCast = lazy(() => import('./MovieDetailPageItems/InfoCast/InfoCast'));
const InfoReview = lazy(() =>
  import('./MovieDetailPageItems/InfoReview/InfoReview')
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster
        toastOptions={{
          duration: 1500,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<PageMovie />} />
          <Route path="movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<InfoCast />} />
            <Route path="reviews" element={<InfoReview />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
