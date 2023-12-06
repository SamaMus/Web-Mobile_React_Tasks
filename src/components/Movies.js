import React from 'react';
import './Movies.css';

const Movies = ({ title, year, director, genre, image, imdbLink }) => {
  return (
    <div className="movie-box">
      <a href={imdbLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="movie-image" />
      </a>
      <div className="movie-details">
        <h3>{title}</h3>
        <p className="year">{year}</p>
        <p>Director: {director}</p>
        <p className="genre">Genre: {genre}</p>
        <p className="imdb-link">
          <a href={imdbLink} target="_blank" rel="noopener noreferrer">
            IMDb Page
          </a>
        </p>
      </div>
    </div>
  );
};

export default Movies;
