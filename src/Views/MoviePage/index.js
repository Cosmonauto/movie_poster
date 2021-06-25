// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router";
// import Movie from "../../components/Movie/index";
// import MoviesList from "../../components/MoviesList/index";
// import { chocolateContext } from "../../context/ChocolateContext";

// export default function BrandPage() {
//     const { id } = useParams();
//     const { movies, fetchBrandProducts, fetchMovieDetail, menuItems } =
//         useContext(chocolateContext);

//     useEffect(() => {
//         fetchBrandProducts(id);
//         fetchMovieDetail(id);
//     }, [id]);

//     return (
//         <>
//             {movies.length && menuItems && (
//                 <>

//                     <MoviesList movies={movies} />
//                 </>
//             )}
//         </>
//     );
// }
