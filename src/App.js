import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllMovies from './components/AllMovies';
import './index.css';
import { SearchMovies } from './components/SearchMovies';

export const App = () => {
  return (
    <div className="firstpage">
      <BrowserRouter>
        <h1>Hello and welcome to Ninas first express api!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/all-movies">All Movies</Link>
            </li>
            <li>
              <Link to="/search-movies">Search Movies</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact> </Route>
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/search-movies" element={<SearchMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

