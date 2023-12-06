import React, { useState } from 'react';
import './Movies.css';
import Movies from './Movies';

const MovieApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3; // Number of movies to display per page

  const moviesData = [
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      image: 'https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_UF894,1000_QL80_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      genre: 'Drama',
      image: 'https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      title: 'The Lord of the Rings',
      year: 2001,
      director: 'Peter Jackson',
      genre: 'Fantastic',
      image: 'https://m.media-amazon.com/images/I/91Ju+9pP9kL.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0120737/',
    },
    // Additional movies
    {
      title: 'Persischstunden',
      year: 2020,
      director: 'Vadim Perelman',
      genre: 'Drama',
      image: 'URL_TO_IMAGE',
      imdbLink: 'https://www.imdb.com/title/tt10199640/',
    },
    {
      title: 'Im Westen nichts Neues',
      year: 2022,
      director: 'Edward Berger',
      genre: 'War',
      image: 'URL_TO_IMAGE',
      imdbLink: 'https://www.imdb.com/title/tt12364796/',
    },
    {
      title: 'Whiplash',
      year: 2014,
      director: 'Damien Chazelle',
      genre: 'Drama',
      image: 'URL_TO_IMAGE',
      imdbLink: 'https://www.imdb.com/title/tt2582802/',
    },
  ];

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movie-app">
      <header>
        <h1>Movies App</h1>
      </header>
      <main>
        {currentMovies.map((movie, index) => (
          <Movies key={index} {...movie} />
        ))}
      </main>
      <footer>
        <p>&copy; 2023 Movies App</p>
      </footer>
      <div className="pagination">
        {Array.from({ length: Math.ceil(moviesData.length / moviesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieApp;
