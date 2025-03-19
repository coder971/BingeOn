import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovies';
import ReviewForm from '../components/ReviewForm';
import ReviewItem from '../components/ReviewItem';

const MoviePage = () => {
  const { imdbId } = useParams();
  const { movie, loading, error } = useMovie(imdbId);
  const [reviews, setReviews] = useState([]);

  // Set reviews when movie data is loaded
  useEffect(() => {
    if (movie && movie.reviewIds) {
      setReviews(movie.reviewIds);
    }
  }, [movie]);

  // Handle new review added
  const handleReviewAdded = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error loading movie</h2>
        <p className="text-gray-700 mb-6">{error || "Movie not found"}</p>
        <button 
          onClick={() => window.history.back()} 
          className="px-6 py-2 bg-primary text-white font-semibold rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Backdrop */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {movie.backdrops && movie.backdrops.length > 0 && (
          <img 
            src={movie.backdrops[0]} 
            alt={`${movie.title} backdrop`} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{movie.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre, index) => (
                  <span key={index} className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
              <p className="text-white text-lg">
                Released: {movie.releaseDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Poster */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Details & Trailer */}
          <div className="lg:col-span-2">
            {/* Trailer Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trailer</h2>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: '56.25%' }}>
                {movie.trailerLink ? (
                  <iframe
                    src={movie.trailerLink.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1'}
                    title={`${movie.title} Trailer`}
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p className="text-gray-500">Trailer not available</p>
                  </div>
                )}
              </div>
            </div>


            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reviews</h2>
              
              {/* Review Form */}
              <div className="mb-8">
                <ReviewForm imdbId={movie.imdbId} onReviewAdded={handleReviewAdded} />
              </div>
              
              {/* Reviews List */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {reviews.length > 0 ? `${reviews.length} Reviews` : 'No reviews yet'}
                </h3>
                
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <ReviewItem key={index} review={review} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Be the first to review this movie!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;