import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Release year: {movie.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllMovies;
