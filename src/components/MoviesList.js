import React from 'react'
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <div><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></div>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;

//think of a router as a window, that will change as we move from route to route

