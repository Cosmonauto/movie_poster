import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import MoviesList from "../../components/MoviesList";
// import PsList from "../../components/ProductsList";
// import { storeContext } from "../../contexts/StoreContext";
// import MainLayout from "../../Layouts/MainLayout";
import Navbar from "../../components/Navbar/Navbar";
export default function GenrePage() {
  const { id } = useParams();
  const { movies, fetchGenreMovies, fetchGenreDetail, genreDetail } =
    useContext(movieContext);

  useEffect(() => {
    fetchGenreDetail(id);
    fetchGenreMovies(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <h1>{genreDetail.title}</h1>
      {movies.length && genreDetail ? (
        <>
          <MoviesList movies={movies} />
        </>
      ) : null}
    </>
  );
}
