const API_KEY = '8ce4d60aeb50d7918512009f3600cae1';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U0ZDYwYWViNTBkNzkxODUxMjAwOWYzNjAwY2FlMSIsInN1YiI6IjY0ZTkxN2Y4NTI1OGFlMDBlYWE0Mjg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fnLQ8_hVx7HTWQIXzGqsFt0wS1X5a1POKEPBc1Xl7ZY';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?language=en-US`,
    options
  )
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(err => console.error(err));
  return response.results;
};

export const getMovieSearch = async input => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${input}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(err => console.error(err));
  return response.results;
};

export const getMovieDetail = async input => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${input}?language=en-US`,
    options
  )
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(err => console.error(err));
  console.log(response, typeof response);
  return response;
};
