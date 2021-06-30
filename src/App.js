import React from "react";
import Routes from "./Routes";
import { ConfirmProvider } from "material-ui-confirm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MovieContextProvider from "./contexts/MovieContext";
toast.configure();
const defaultConfirmOptions = {
  title: "Вы уверены?",
  confirmationText: "Да",
  cancellationText: "Отмена",
};
function App() {
  return (
    // <div className="App">
    <ConfirmProvider defaultOptions={defaultConfirmOptions}>
      <MovieContextProvider>
        <Routes />
      </MovieContextProvider>
    </ConfirmProvider>
    // </div>
  );
}

export default App;
