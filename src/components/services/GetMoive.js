const API_KEY = '34a5fbd438003973ca29c1eb4275da52';

export const GetTopMovie = () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';

  return fetch(`${BASE_URL}?&api_key=${API_KEY}`);
};

export const SearchMovie = text => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  return fetch(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`
  );
};

export const OneMovieDetail = movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';

  return fetch(`${BASE_URL}${movieId}?api_key=${API_KEY}&language=en-US`);
};

export const getActorsDetail = movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';

  return fetch(`${BASE_URL}/${movieId}
  /credits?api_key=${API_KEY}&language=en-US`);
};

export const getViewsFilm = movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';

  return fetch(
    `${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
