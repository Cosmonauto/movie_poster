import React, { useState } from "react";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import ProductsList from "../../components/ProductsList";

function MainPage(props) {
  const initialState = {
    currentPage: 1,
  };
  const [state, setState] = useState(initialState);
  return (
    <div>
      <ProductsList />
      <MoviesPagination state={state} setState={setState} total={18} />
    </div>
  );
}

export default MainPage;
