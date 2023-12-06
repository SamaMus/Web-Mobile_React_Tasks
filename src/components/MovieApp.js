import React from 'react';
import './Movies.css'; 

const MovieApp = () => {
  const moviesData = [
     {
      title: "Inception",
      year: 2010,
      director: "Christopher Nolan",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_UF894,1000_QL80_.jpg",
      imdbLink:"https://www.imdb.com/title/tt1375666/",

    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
      imdbLink:"https://www.imdb.com/title/tt0111161/"
    },
    {
      title: "The Lord of the Rings",
      year: 2001,
      director: "Peter Jackson",
      genre: "Fantastic",
      image: "https://m.media-amazon.com/images/I/91Ju+9pP9kL.jpg",
      imdbLink:"https://www.imdb.com/title/tt0120737/"
    },
  ];


  return (
    <div className="movie-app">
      <header>
        <h1>Movies App</h1>
      </header>
      <main>
        {moviesData.map((movie, index) => (
          <movie key={index} {...movie} />
        ))}
      </main>
      <footer>
        <p>&copy; 2023 Movies App</p>
      </footer>
    </div>
  );
};
export default MovieApp;
