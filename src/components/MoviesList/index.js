import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Movie from "../Movie";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MoviesList({ movies }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={4}>
            <Movie data={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
