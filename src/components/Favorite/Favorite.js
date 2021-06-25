import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { calcTotalPrice } from "../../helpers/calcPrice";
// import { storeContext } from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
// import MainLayout from "../../Layouts/MainLayout";
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
