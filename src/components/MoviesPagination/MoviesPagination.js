import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Pagination } from "@zendeskgarden/react-pagination";
import { useState } from "react";
export default function MoviesPagination({ total, state, setState }) {
  return (
    <ThemeProvider>
      <Pagination
        totalPages={total}
        currentPage={state.currentPage}
        onChange={(currentPage) => setState({ currentPage })}
      />
    </ThemeProvider>
  );
}

/**
 * Place a `ThemeProvider` at the root of your React application
 */
