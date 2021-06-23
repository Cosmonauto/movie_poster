import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from "react-router";
import MoviesList from '../../components/MoviesList';
import { movieContext } from '../../contexts/MovieContext';



export default function Showing() {
    const { id } = useParams();
    const { movies, fetchMovies, fetchSearchMovies, fetchbrandDetail } =
        useContext(movieContext);

    useEffect(() => {
        fetchMovies(id);
        fetchSearchMovies(id);
    }, [id]);
    return (
        <div>
            <Navbar />
            {movies.length && fetchbrandDetail && (
                <>

                    <MoviesList movies={movies} />
                </>
            )}
        </div>
    )
}
