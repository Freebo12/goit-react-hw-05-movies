import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getViewsFilm } from '../../services/GetMoive';
import { InfoReviewList } from './InfoReviewList';

const InfoReview = () => {
  const [opinion, setOpinion] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getViewsFilm(movieId)
      .then(resp => resp.json())
      .then(opinion => setOpinion(opinion.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return <InfoReviewList reviews={opinion} />;
};

export default InfoReview;
