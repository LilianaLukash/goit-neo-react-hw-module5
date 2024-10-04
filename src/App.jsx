import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  

  return (
     <>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </React.Suspense>
    </> 
        )
}

export default App
