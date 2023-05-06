import React, { useState } from 'react';

const getMovieByTitle = async (title) => {
  const response = await fetch(`https://project-express-api-y6ibchp5wa-lz.a.run.app/movies/${title}`);
  const data = await response.json();
  if (data.status === 'success') {
    return data;
  } else {
    throw new Error(data.message);
  }
};

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (title) => {
    try {
      const data = await getMovieByTitle(title);
      setMovie(data.body.movie);
      setError('');
    } catch (err) {
      setMovie(null);
      setError('No movie found');
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
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <h2>{movie.release_year}</h2>
          <p>{movie.description}</p>
        </div>
      )}
    </div>
  );
};
