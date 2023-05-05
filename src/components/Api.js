export const getMovieByTitle = async (title) => {
  try {
    const response = await fetch(`https://project-express-api-y6ibchp5wa-lz.a.run.app/movies/${title}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllMovies = async () => {
  try {
    const response = await fetch('https://project-express-api-y6ibchp5wa-lz.a.run.app/movies');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
/*
The async/await syntax is a newer way to handle asynchronous operations in JavaScript.
It allows you to write asynchronous code in a more synchronous way,
which can make it easier to read and understand.
When using async/await,
you don't need to use .then and .catch to handle the response and errors from a fetch request.
 Instead, you can use await to wait for the response to be returned,
 and then use a try/catch block to handle any errors that might occur.
In your example, the getMovieByTitle function is an asynchronous function
 that fetches data from your API using the await keyword.
If the fetch request is successful,
the function returns the data as a JSON object. If an error occurs,
the function logs the error to the console.
The async/await syntax makes it easier to write and read asynchronous code,
without having to use callbacks or promise chains.
*/
