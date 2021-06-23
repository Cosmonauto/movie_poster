import React, { useState } from "react";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import moviesList from "../../components/MoviesList";

function MainPage(props) {
  const initialState = {
    currentPage: 1,
  };
  const [state, setState] = useState(initialState);
  return (
    <div>
      <moviesList />
      <MoviesPagination state={state} setState={setState} total={18} />
    </div>
  );
}

export default MainPage;
