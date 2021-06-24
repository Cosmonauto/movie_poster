import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCaousel from "../../components/HeroCarousel/HeroCarousel";
import { makeStyles } from "@material-ui/core/styles";
import MoviesList from "../../components/MoviesList/index";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import { movieContext } from "../../contexts/MovieContext";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router";

// import PaginationSlider from "../../components/PaginationSlider/PaginationSlider";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "fixed",
    top: "50%",
    right: 15,
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

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
      {/* <PaginationSlider /> */}
      {/* <OwlPagination /> */}
      <Fab
        onClick={() => history.push("/createMovie")}
        className={classes.addBtn}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
