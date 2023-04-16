import {
  ListActors,
  BoxAactors,
  ActorName,
  Character,
  ActorsNotFound,
} from './InfoCast.styled';
import NotFound from 'img/NotFound.jpg';

export const InfoCastList = ({ detail }) => {
  if (detail !== undefined) {
    return (
      <ListActors>
        {detail.map(actor => (
          <li key={actor.id}>
            <BoxAactors>
              <ActorName>{actor.name}</ActorName>
              <img
                src={
                  actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : NotFound
                }
                alt={actor.name}
                width="150px"
                height="200px"
              />
              <Character>Character:{actor.character}</Character>
            </BoxAactors>
          </li>
        ))}
      </ListActors>
    );
  }
  return <ActorsNotFound>Actors not Found...</ActorsNotFound>;
};
