import axios from 'axios';

const API_OPTIONS = {
  apiKey: 'bcb23eb0e57eead85fe68d64f412ef39',
  apiBaseUrl: 'https://api.themoviedb.org/3/',
};

axios.defaults.baseURL = API_OPTIONS.apiBaseUrl;

export const getTrendingMovies = async (mediaType, period) => {
  const searchUrl = `trending/${mediaType}/${period}?api_key=${API_OPTIONS.apiKey}`;
  const response = await axios.get(searchUrl);
  const results = response.data.results;
  //   console.log(results);

  return results;
};

export const getMovieDetailsById = async movieId => {
  const searchUrl = `movie/${movieId}?api_key=${API_OPTIONS.apiKey}`;
  const response = await axios.get(searchUrl);
  const results = response.data;
  //   console.log('API getMovieById  ==> ', response.data);

  return results;
};

export const getMovieCastById = async movieId => {
  const searchUrl = `movie/${movieId}/credits?api_key=${API_OPTIONS.apiKey}`;
  const response = await axios.get(searchUrl);
  const results = response.data.cast;
  // console.log('API getMovieCreditsById  ==> ', results);

  return results;
};

export const getMovieReviewsById = async movieId => {
  const searchUrl = `movie/${movieId}/reviews?api_key=${API_OPTIONS.apiKey}`;
  const response = await axios.get(searchUrl);
  const results = response.data.results;
  // console.log('API getMovieReviewsById  ==> ', results);

  return results;
};

export const getMovieByName = async query => {
  const searchUrl = `search/movie?api_key=${API_OPTIONS.apiKey}&query=${query}`;
  const response = await axios.get(searchUrl);
  const results = response.data.results;
  console.log('API getMovieByName  ==> ', results);

  return results;
};
