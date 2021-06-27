import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from "react-router";
import MoviesList from '../../components/MoviesList';
import { movieContext } from '../../contexts/MovieContext';
import Carousal from './3dCarousal/Carousal';



export default function Showing() {
    const { id } = useParams();
    const { movies, fetchMovies } =
        useContext(movieContext);

    useEffect(() => {
        fetchMovies(id);
    }, [id]);
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "50px" }}>
                <p>NOW SHOWING</p>
            </div>
            <Carousal style={{ marginBottom: "40px" }} />
            <MoviesList movies={movies} />
        </div>
    )
}
