import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import MoviesList from '../../components/MoviesList/index';
import { movieContext } from '../../contexts/MovieContext';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 40,
        textAlign: 'center',
    },
}));

export default function SearchResultPage() {
    const classes = useStyles();
    const { searchValue } = useParams();
    const { fetchSearchMovies, movies } = useContext(movieContext);
    console.log(searchValue);
    useEffect(() => {
        fetchSearchMovies(searchValue);
    }, [searchValue]);

    return (
        <>
            <Navbar />
            <Typography className={classes.title} variant="h4">
                Результаты поиска по "{searchValue}"
            </Typography>
            <MoviesList movies={movies} />
            <Footer />
        </>
    );
}
