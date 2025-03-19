import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
  const { movies, loading, error } = useMovies();

  // Get top 3 movies with the most reviews
  const popularMovies = movies
    ?.sort((a, b) => (b.reviewIds?.length || 0) - (a.reviewIds?.length || 0))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Movies</h2>

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
            {/* Popular Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {popularMovies?.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
              ))}
            </div>

            {/* Explore All Button */}
            <div className="mt-12 text-center">
              <Link
                to="/explore"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-primary-dark"
              >
                Explore All Movies
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;