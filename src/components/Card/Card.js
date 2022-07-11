import React from "react";
import "./Card.css";

let params = {
  url: "https://image.tmdb.org/t/p/w300",
};

const Card = ({ movie }) => {
  return (
    <li className="movieCard">
      <img src={`${params.url}/${movie.poster_path}`} alt={movie.title} className="image-card"/>
      <p className="movieTitle">{movie.title}</p>
    </li>
  );
};

export { Card };
