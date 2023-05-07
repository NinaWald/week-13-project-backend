import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading'; // Import the Loading component

const AllMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies');
        setMovies(response.data);
        setIsLoading(false); // Set isLoading to false when the movies are loaded
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Also set isLoading to false on error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Movies</h1>
      {isLoading ? ( // Render the Loading component if isLoading is true
        <Loading />
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p>Release year: {movie.release_year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllMovies;
