import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from '../Navbar/Navbar';
import { makeStyles, Typography } from "@material-ui/core";
import MoviesList from "../MoviesList";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 40,
        textAlign: 'center',
    },
}));

export default function FilterResultPage() {
    const classes = useStyles();
    const { movies, fetchMovies, fetchSearchMovies, fetchGenres, genres, fetchFilterMovies } = useContext(movieContext);
    const { filterValue } = useParams()
    useEffect(() => {
        fetchFilterMovies(filterValue);
    }, [filterValue]);



    return (
        <>
            <Navbar />
            <Typography className={classes.title} variant="h4">
                Результаты поиска по "{filterValue}"
            </Typography>
            <MoviesList movies={movies} />
        </>
    )
}
