// const API_KEY = '8ce4d60aeb50d7918512009f3600cae1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U0ZDYwYWViNTBkNzkxODUxMjAwOWYzNjAwY2FlMSIsInN1YiI6IjY0ZTkxN2Y4NTI1OGFlMDBlYWE0Mjg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fnLQ8_hVx7HTWQIXzGqsFt0wS1X5a1POKEPBc1Xl7ZY',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
};
