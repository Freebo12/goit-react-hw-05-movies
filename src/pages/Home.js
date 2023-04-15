import { useEffect, useState } from 'react';
import { GetTopMovie } from 'components/services/GetMoive';
import { HomePageList } from 'components/HomePageItems/HomePageList';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  color: orange;
  font-weight: 900;
`;

const Home = () => {
  const [topFilm, setTopFilm] = useState([]);

  useEffect(() => {
    GetTopMovie()
      .then(resp => resp.json())
      .then(movies => setTopFilm([...movies.results]));
  }, []);

  return (
    <>
      <HomeTitle>Top Films</HomeTitle>
      <HomePageList films={topFilm} />
    </>
  );
};

export default Home;
