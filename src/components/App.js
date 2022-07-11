import React from "react";
import { MoviesGrid } from "./MoviesGrid/MoviesGrid";
import "./App.css";
import { SearchField } from "./SearchField/SearchField";

const App = () => {
  return (
    <>
      <h1 className="title">SiG Movies</h1>
      <SearchField />
      <MoviesGrid />
    </>
  );
};

export { App };
