import { SearchMovie } from '../components/services/GetMoive';

import { useEffect, useState } from 'react';
import { MovieSearchList } from 'components/MoviePageItems/MovieSearchList';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/MoviePageItems/SearchBar';

const PageMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ArrayFilm, setArrayFilm] = useState([]);
  const query = searchParams.get('query' ?? '');

  const handleSubmit = searchQuery => {
    setSearchParams(searchQuery === '' ? {} : { query: searchQuery });
  };

  useEffect(() => {
    if (query !== null) {
      SearchMovie(query)
        .then(resp => resp.json())
        .then(film => setArrayFilm([...film.results]));
    }
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {!ArrayFilm !== [] && <MovieSearchList films={ArrayFilm} />}
    </>
  );
};

export default PageMovie;
