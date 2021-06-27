import React, { useContext, useEffect } from "react";

import MovieCard from "../MovieCard/MovieCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from "../Navbar/Navbar";
import classes from "./favorite.module.css";
import { bottom } from "@popperjs/core";

export default function Favorite() {
  const { favorite, getFavorite } = useContext(movieContext);

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <>
      <div className={classes.font}>
        <Navbar />
        <h2 style={{ marginBottom: "40px" }}>Избранное</h2>
        <h4 style={{ marginBottom: "40px" }}>
          Лайкайте понравившиеся вам фильмы и добавляйте сюда
        </h4>
        <div className={classes.cards}>
          {favorite.movies
            ? favorite.movies.map((elem) => <MovieCard data={elem.item} />)
            : null}
        </div>
      </div>
    </>
  );
}
