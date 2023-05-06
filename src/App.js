import React, { useState, useEffect } from 'react';

const getAllMovies = async () => {
  const response = await fetch('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies');
  const data = await response.json();
  if (data.status === 'success') {
    return data.body.movies;
  } else {
    throw new Error(data.message);
  }
};

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = await getAllMovies();
        setMovies(allMovies);
      } catch (err) {
        setError('Failed to fetch movies');
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (title) => {
    try {
      const response = await fetch(`https://project-express-api-y6ibchp5wa-lz.a.run.app/movies/${title}`);
      const data = await response.json();
      if (data.status === 'success') {
        setMovies([data.body.movie]);
        setError('');
      } else {
        setError('No movie found');
      }
    } catch (err) {
      setError('Failed to fetch movie');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="form">
          Search for a movie:
          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};
