import React from "react";
import Routes from "./Routes";

import MovieContextProvider from "./contexts/MovieContext";
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Routes />
      </MovieContextProvider>
    </div>
  );
}

export default App;
