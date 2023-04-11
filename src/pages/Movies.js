import { SearchMovie } from '../components/services/GetMoive';
import { useState } from 'react';
import { MovieSearchList } from 'components/MoviePageItems/MovieSearchList';

const PageMovie = () => {
  const [textSearch, setTextSearch] = useState('');
  const [ArrayFilm, setArrayFilm] = useState([]);



  const handleChange = ({ target: { value } }) => {
    setTextSearch(value);
  };

  const hadleSubmit = evt => {
    evt.preventDefault();

    if (textSearch !== '') {
      setTextSearch(textSearch);
      setTextSearch('');
      SearchMovie(textSearch)
        .then(resp => resp.json())
        .then(film => setArrayFilm([...film.results]));
    } else {
      return console.log('Write something Toast');
    }
  };

  return (
    <>
      <form role="search" onSubmit={hadleSubmit}>
        <input
          type="search"
          placeholder="Search"
          value={textSearch}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {!ArrayFilm !== [] && <MovieSearchList films={ArrayFilm} />}
    </>
  );
};

export default PageMovie;
