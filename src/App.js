import React, { useState, useEffect } from 'react';

export const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies')
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = moviesList.filter((movie) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearch} />
      </form>
      {filteredMovies.map((movie) => (
        <div key={movie.show_id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};
