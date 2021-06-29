import { makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import MoviesList from "../../components/MoviesList/index";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from "../Navbar/Navbar";
import MoviesPagination from "../MoviesPaginationOriginal";
const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 40,
        textAlign: "center",
    },
}));

export default function FilterResultPage() {
    const classes = useStyles();
    const { filterValue } = useParams();
    const { fetchFilterMovies, movies, total } = useContext(movieContext);
    const [page, setPage] = useState(1);
    console.log(filterValue);
    useEffect(() => {
        fetchFilterMovies(filterValue, page);
    }, [filterValue, page]);

    return (
        <>
            <Navbar />
            <Typography className={classes.title} variant="h4">
                Фильмы по жанру "{filterValue}"
            </Typography>
        </>
    );
}
