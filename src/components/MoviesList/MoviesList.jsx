import { Link, useLocation } from 'react-router-dom';
import {
  Wrapper,
  List,
  ListItem,
  Item,
} from 'components/MoviesList/MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? `movies/` : ``;

  return (
    <Wrapper>
      <List>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <ListItem key={id}>
              <Link to={`${path}${id}`} state={{ from: location }}>
                <Item>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                      alt={original_title}
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/200x300"
                      alt={original_title}
                    />
                  )}
                  <span>{original_title}</span>
                </Item>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};
export default MoviesList;
