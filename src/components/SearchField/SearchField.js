import React from "react";
import "./SearchField.css";

const SearchField = () => {
  return (
    <input className="inputSearch" type="search" placeholder="Ingrese la pelicula a buscar" required />
  );
};

export { SearchField };
