import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { movieContext } from "../../contexts/MovieContext";

function BestMovies(props) {
  const { fetchMovies, movies } = useContext(movieContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  //   console.log(movies[0]);
  return (
    <div>
      <h1>Лучшие фильмы</h1>
      {movies.map((movie) =>
        movie.rating > 1 ? <h1>{movie.titel}</h1> : null
      )}
    </div>
  );
}

export default BestMovies;
