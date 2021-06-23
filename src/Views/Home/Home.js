import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCaousel from "../../components/HeroCarousel/HeroCarousel";
import MoviesList from "../../components/MoviesList/index";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import { movieContext } from "../../contexts/MovieContext";
// import PaginationSlider from "../../components/PaginationSlider/PaginationSlider";

export default function Home() {
  const { fetchMovies, movies } = useContext(movieContext);
  useEffect(() => {
    fetchMovies();
  }, []);

  const initialState = {
    currentPage: 1,
  };
  const [state, setState] = useState(initialState);
  return (
    <div>
      <Navbar />
      <HeroCaousel />
      <MoviesList movies={movies} />

      <MoviesPagination state={state} setState={setState} total={18} />
      {/* <PaginationSlider /> */}
      {/* <OwlPagination /> */}
    </div>
  );
}
