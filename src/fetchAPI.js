import axios from 'axios';

const API_KEY = '8ce4d60aeb50d7918512009f3600cae1';
const BASE_URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return await response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const api = { getTrendingMovies };
