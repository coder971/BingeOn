import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

const ExplorePage = () => {
  const { movies, loading, error } = useMovies();
  const [activeGenre, setActiveGenre] = useState('all');

  // Get unique genres from movies
  const getUniqueGenres = () => {
    const genres = new Set();
    movies?.forEach((movie) => {
      movie.genres?.forEach((genre) => genres.add(genre));
    });
    return ['all', ...Array.from(genres)];
  };

  const genres = getUniqueGenres();

  // Filter movies based on selected genre
  const filteredMovies = activeGenre === 'all'
    ? movies
    : movies?.filter((movie) => movie.genres.includes(activeGenre));

  return (
    <div className="min-h-screen bg-light-cream">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Movies</h2>

        {/* Genre Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeGenre === genre
                  ? 'bg-primary text-white'
                  : 'bg-light-cream text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              {genre === 'all' ? 'All Genres' : genre}
            </button>
          ))}
        </div>

        {/* Loading & Error State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Movie Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies?.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
              ))}
            </div>

            {filteredMovies?.length === 0 && (
              <p className="text-center text-gray-600 mt-8">No movies found in this category.</p>
            )}

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-primary-dark"
              >
                Back to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;