import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const api = {
  getAllMovies: () => axios.get(`${API_BASE_URL}/movies`),
  getMovie: (imdbId) => axios.get(`${API_BASE_URL}/movies/${imdbId}`),
  postReview: (reviewBody, imdbId) => axios.post(`${API_BASE_URL}/reviews`, { reviewBody, imdbId }),
};

export default api;