import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">These are Sama's React Apps</h1>
      <div className="buttons-container">
        <Link to="/quote" className="app-button">
         Quotes App
        </Link>
        <Link to="/movie" className="app-button">
        Movies App
        </Link>
      </div>
    </div>
  );
};

export default Home;
