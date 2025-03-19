import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About BingeOn</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At BingeOn, we're passionate about movies and creating a community where film enthusiasts can discover, 
              discuss, and celebrate cinema. Our platform aims to provide comprehensive information about movies, 
              honest reviews from our community, and a space for meaningful conversations about the art of filmmaking.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-light-cream p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
                  </svg>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">Movie Information</h3>
                </div>
                <p className="text-gray-700">Comprehensive details about movies, including cast, crew, plot summaries, and trailers to help you make informed viewing decisions.</p>
              </div>
              
              <div className="bg-light-cream p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">User Reviews</h3>
                </div>
                <p className="text-gray-700">Authentic reviews from real movie enthusiasts, providing diverse perspectives and honest opinions on the latest releases.</p>
              </div>
              
              <div className="bg-light-cream p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">Curated Lists</h3>
                </div>
                <p className="text-gray-700">Thoughtfully compiled collections of movies based on genres, themes, directors, and more to help you discover your next favorite film.</p>
              </div>
              
              <div className="bg-light-cream p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <h3 className="ml-2 text-xl font-semibold text-gray-800">Community</h3>
                </div>
                <p className="text-gray-700">A vibrant community of movie lovers where you can share your thoughts, engage in discussions, and connect with like-minded cinephiles.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              BingeOn was created by a team of passionate film enthusiasts who wanted to build a platform that celebrates 
              the art of cinema and fosters meaningful discussions about movies. Our diverse team brings together 
              expertise in film criticism, web development, and community building to create a unique space for movie lovers.
            </p>
            
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Join Our Community</h3>
              <p className="text-gray-700 mb-6">
                Whether you're a casual moviegoer or a dedicated cinephile, BingeOn is the perfect place to discover, 
                discuss, and celebrate movies. Start exploring our collection today!
              </p>
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-primary-dark">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;