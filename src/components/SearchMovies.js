import React, { useState } from 'react';
import axios from 'axios';

export const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies');
    const filteredMovies = response.data.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setMovies(filteredMovies);
  };

  const handleReset = () => {
    setSearchTerm('');
    setMovies([]);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          Search for a movie title:
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {movies.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Release year: {movie.release_year}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
