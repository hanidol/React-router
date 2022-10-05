import React from "react";
import "../App.css";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { title, description, posterURL, rating, id },
}) => {
  return (
    <div className="container">
      <div className="movie">
        <div className="poster">
          <img src={posterURL} alt="img" />
        </div>
        <div className="movie-details">
          <div className="box">
            <Rate rating={rating} />
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="overview">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="btn">
        <Link to={`/trailler/${id}`}>show trailler</Link>
      </div>
    </div>
  );
};

export default MovieCard;
