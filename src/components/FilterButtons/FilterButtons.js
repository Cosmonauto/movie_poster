import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from "react-router";
import { movieContext } from '../../contexts/MovieContext';


function FilterButtons(props) {
    const [filterValue, setFilterValue] = useState("");
    const [fetchedMovies, setFetchedMovies] = useState([]);
    const { fetchGenres, genres, fetchFilterMovies, movies } = useContext(movieContext);

    useEffect(() => {
        // fetchGenres()
    }, []);


    const history = useHistory();



    const handleFilterSubmit = (e) => {
        fetchFilterMovies(filterValue).then((movies) =>
            setFetchedMovies(movies)
        );
        setFetchedMovies([]);
        setFilterValue("");
        if (filterValue) {
            console.log(filterValue);
            history.push(`/movie/filter/${filterValue}`);
        }
    };

    return (
        <>
            <div style={{
                marginTop: "100px"
            }}>
                <button onClick={() => {
                    setFilterValue('Action');
                    handleFilterSubmit();
                }}
                >Action</button>
                <button onClick={() => {
                    setFilterValue('Drama');
                    handleFilterSubmit();
                }}>Drama</button>
                <button onClick={() => {
                    setFilterValue('Comedy');
                    handleFilterSubmit();
                }}>Comedy</button>
                <button onClick={() => {
                    setFilterValue('Romance');
                    handleFilterSubmit();
                }}>Romance</button>
                <button onClick={() => {
                    setFilterValue('Horror');
                    handleFilterSubmit();
                }}>Horror</button>
            </div >
        </>
    );
}

export default FilterButtons;