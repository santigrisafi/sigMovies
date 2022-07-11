import React from "react";
import { Card } from "../Card/Card";
import movies from "./../data/peliculas.json";
import "./MoviesGrid.css";

const MoviesGrid = () => {
  return (
    <>
      <ul className="moviesGrid">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </ul>
    </>
  );
};

export { MoviesGrid };
