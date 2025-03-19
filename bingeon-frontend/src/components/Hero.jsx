import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-primary-dark text-white overflow-hidden">
      {/* Background with radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-black/70"></div>
      
      {/* Decorative film strip elements */}
      <div className="absolute -left-20 top-10 w-64 h-64 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute -right-20 bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-xl"></div>
      
      {/* Content container */}
      <div className="relative container mx-auto px-6 py-32 flex items-center min-h-[600px]">
        <div className="max-w-3xl z-10">
          
          
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover and Review Your <span className="text-light-cream">Favorite Movies</span>
          </h1>
          
          {/* Subheading with improved spacing */}
          <p className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90">
            Join our community of movie lovers to explore, rate, and discuss the latest and greatest films.
          </p>
          
          {/* Call to action buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/explore" 
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg transition duration-300 hover:bg-opacity-90 shadow-lg hover:translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Explore Movies
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-red-500 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-light-cream border-2 border-primary-dark flex items-center justify-center text-xs text-primary-dark">
                  {i}
                </div>
              ))}
            </div>
            <p className="ml-4 text-sm opacity-90">Join 10,000+ movie enthusiasts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;