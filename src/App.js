import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuoteApp from './components/QuoteApp';
import MovieApp from './components/MovieApp'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/quote" element={<QuoteApp />} />
        <Route path="/movie" element={<MovieApp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
