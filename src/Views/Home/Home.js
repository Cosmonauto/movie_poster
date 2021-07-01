import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCaousel from "../../components/HeroCarousel/HeroCarousel";
import { makeStyles } from "@material-ui/core/styles";
import MoviesList from "../../components/MoviesList/index";
// import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import { movieContext } from "../../contexts/MovieContext";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router";
import MoviesPagination from "../../components/MoviesPaginationOriginal";
import BestMovies from "../../components/BestMovies/BestMovies";
import Footer from "../../components/Footer/Footer";

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
  const [page, setPage] = useState(1);
  const { fetchMovies, movies, total, fetchGenres, genres } =
    useContext(movieContext);
  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  const user = JSON.parse(`${localStorage.getItem("user")}`);
  return (
    <div>
      <Navbar />
      <HeroCaousel />
      <MoviesList movies={movies} />

      <MoviesPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      />
      <Footer />

      {user ? (
        user.email ? (
          <Fab
            onClick={() => history.push("/createMovie")}
            className={classes.addBtn}
            style={{ backgroundColor: "red", color: "#fff" }}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        ) : null
      ) : null}
    </div>
  );
}
