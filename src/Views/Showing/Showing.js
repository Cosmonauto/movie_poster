import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useHistory, useParams } from "react-router";
import MoviesList from "../../components/MoviesList";
import { movieContext } from "../../contexts/MovieContext";
import Carousal from "./3dCarousal/Carousal";
import FilterButtons from '../../components/FilterButtons/FilterButtons.js'

export default function Showing() {
  const { searchValue, id } = useParams();
  const { movies, fetchMovies, fetchSearchMovies, fetchGenres, genres, fetchFilterMovies } = useContext(movieContext);
  const [filterValue, setFilterValue] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);

  const handleSearchChange = (e) => {
    setFilterValue(e.target.value);
  };

  const history = useHistory();

  const handleSearchItemClick = (id) => {
    history.push(`/movie/${id}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchFilterMovies(filterValue).then((movies) =>
      setFetchedMovies(movies)
    );
    setFetchedMovies([]);
    setFilterValue("");
    if (filterValue) {
      console.log(searchValue);
      history.push(`/movie/search/${searchValue}`);
    }
  };

  useEffect(() => {
    fetchMovies(id);
    fetchSearchMovies(searchValue);
    // fetchGenres();
    console.log(genres)
  }, [id, searchValue]);
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
        }}
      >
        <p>NOW SHOWING</p>
      </div>
      {/* {genres.map((genre) => {
        <button title={genre}></button>
      })}
      <button /> */}
      <Carousal style={{ marginBottom: "40px" }} />
      <MoviesList movies={movies} />
      <FilterButtons />
    </>
  );
}
