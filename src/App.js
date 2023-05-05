import React, { useState } from 'react';
import { getMovieByTitle, getAllMovies } from './components/Api';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movie, setMovie] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  const handleSearch = async (title) => {
    const data = await getMovieByTitle(title);
    setMovie(data.body.movie);
  };

  const handleGetAllMovies = async () => {
    const data = await getAllMovies();
    setMoviesList(data.body.movies);
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
      <button type="button" onClick={handleGetAllMovies}>Show all movies</button>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <h2>{movie.release_year}</h2>
          <p>{movie.description}</p>
        </div>
      )}
      {moviesList.length > 0 && (
        <ul>
          {moviesList.map((listMovie) => (
            <li key={listMovie.title}>{listMovie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
