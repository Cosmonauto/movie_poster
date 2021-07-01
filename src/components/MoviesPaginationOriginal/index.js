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
    color: red
  },
}));

export default function MoviesPagination({ count, page, setPage }) {
  const classes = useStyles();
  function localStoragePageSet(page) {
    let data = localStorage.getItem("page");
    if (!data) {
      localStorage.setItem("page", 1);
    }
    data = localStorage.getItem("page");
    localStorage.setItem("page", page);
  }
  // count - amount of pages in pagination
  // page - currentPage

  return (
    <Pagination
      // change current page t o clicked page

      variant="h2"
      onChange={(_, page) => {
        setPage(page);
        localStoragePageSet(page);
      }}
      count={count}
      style={{ color: 'inherit' }}
      page={page}
      className={classes.pagination}
    />
  );
}
