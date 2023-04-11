import { useParams } from 'react-router-dom';
import { getActorsDetail } from '../../services/GetMoive';
import { useEffect, useState } from 'react';
import { InfoCastList } from './InfoCastList';

export const InfoCast = () => {
  const { movieId } = useParams();
  const [actorDetail, setActorDetail] = useState([]);

  useEffect(() => {
    getActorsDetail(movieId)
      .then(resp => resp.json())
      .then(detail => setActorDetail(detail.cast));
  }, []);

  return <InfoCastList detail={actorDetail} />;
};
