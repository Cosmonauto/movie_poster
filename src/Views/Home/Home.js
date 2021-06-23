import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCaousel from "../../components/HeroCarousel/HeroCarousel";
import MoviesList from "../../components/MoviesList/index";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import { movieContext } from "../../contexts/MovieContext";

export default function Home() {
  const { fetchMovies, movies } = useContext(movieContext);
  useEffect(() => {
    fetchMovies();
  }, []);

  const initialState = {
    movies: movies,
    currentPage: 1,
  };
  const [state, setState] = useState(initialState);
  return (
    <div>
      <Navbar />
      <HeroCaousel />
      <MoviesList movies={movies} />

      <MoviesPagination state={state} setState={setState} total={18} />
    </div>
  );
}
