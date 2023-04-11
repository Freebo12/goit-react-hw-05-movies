import { useEffect, useState } from 'react';
import { GetTopMovie } from 'components/services/GetMoive';
import { HomePageList } from 'components/HomePageItems/HomePageList';

const Home = () => {
  const [topFilm, setTopFilm] = useState([]);

  useEffect(() => {
    GetTopMovie()
      .then(resp => resp.json())
      .then(movies => setTopFilm([...movies.results]));
  }, []);

  return (
    <>
      <h1>Top Films</h1>
      <HomePageList films={topFilm} />
    </>
  );
};

export default Home;
