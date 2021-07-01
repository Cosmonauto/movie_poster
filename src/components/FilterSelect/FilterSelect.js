import React, { useContext, useEffect, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchFilterMovies } from "./api";
import { Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { Field } from "formik";
import { movieContext } from "../../contexts/MovieContext";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "40%",
    },
    marginTop: "150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  searchList: {
    width: "100%",
    height: 300,
    overflowY: "scroll",
    overflowX: "hidden",
    position: "absolute",
    top: 60,
    padding: 20,
  },
  searchItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#EBEEF0",
    },
  },
  select: {
    width: "70%",
    height: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    position: "relative",
    backgroundColor: "#04AA6D",
    border: "none",
    fontSize: "28px",
    color: "#FFFFFF",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    textDecoration: "none",
    overflow: "hidden",
    cursor: "pointer",
  }
}
));

export default function FilterSelect() {
  const classes = useStyles();

  const [filterValue, setFilterValue] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const { fetchGenres, genres } = useContext(movieContext);
  const handleSearchChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const history = useHistory();

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchFilterMovies(filterValue).then((movies) => setFetchedMovies(movies));
    setFetchedMovies([]);
    setFilterValue("");
    if (filterValue) {
      console.log(filterValue);
      history.push(`/movie/filter/${filterValue}`);
    }
  };

  return (
    <div style={{ margin: "0 auto", }}>
      <div className={classes.search}>
        <div>
          <form onSubmit={handleFilterSubmit} className={classes.form}>
            <select
              name="genre"
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
              className={classes.select}
            >
              <option value="Genre">Genre</option>
              {genres.map((genre) => (
                <option value={genre.slug}>{genre.slug}</option>
              ))}
            </select>
            <button className="button" type="submit">filter</button>
          </form>
        </div>
      </div>
    </div>
  );
}