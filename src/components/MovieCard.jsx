import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.imdbId}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative pb-[150%]">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary truncate">{movie.title}</h3>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {movie.genres.slice(0, 2).map((genre, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs bg-light-cream text-primary-dark rounded-full">
                {genre}
              </span>
            ))}
            {movie.genres.length > 2 && (
              <span className="inline-block px-2 py-1 text-xs bg-light-cream text-primary-dark rounded-full">
                +{movie.genres.length - 2}
              </span>
            )}
          </div>
          
          <div className="mt-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">
              {movie.reviewIds?.length > 0 ? `${movie.reviewIds.length} reviews` : 'No reviews yet'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;