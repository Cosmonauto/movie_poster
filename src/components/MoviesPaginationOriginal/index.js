import React from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles(() => ({
  pagination: {
    margin: "50px auto",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function MoviesPagination({ count, page, setPage }) {
  const classes = useStyles();

  // count - amount of pages in pagination
  // page - currentPage

  return (
    <Pagination
      // change current page t o clicked page

      variant="h2"
      onChange={(_, page) => setPage(page)}
      count={count}
      page={page}
      className={classes.pagination}
    />
  );
}
