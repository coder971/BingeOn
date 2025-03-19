import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MoviePage from './pages/MoviePage';
import ExplorePage from './pages/ExplorePage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/movies/:imdbId" element={<MoviePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto px-4 py-12 text-center">
                  <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                  <p className="mt-4">The page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
};

export default App;