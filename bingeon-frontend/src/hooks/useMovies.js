import { useState, useEffect } from 'react';
import api from '../utils/api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await api.getAllMovies();
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export const useMovie = (imdbId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!imdbId) return;
      
      try {
        setLoading(true);
        const response = await api.getMovie(imdbId);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movie details');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbId]);

  return { movie, loading, error };
};