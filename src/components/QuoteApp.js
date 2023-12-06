import React from 'react';
import './Quotes.css'; 


const QuoteApp = () => {
  const quotes = [
    { text: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
    { text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
    { text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
    { text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
    { text: 'In three words I can sum up everything I\'ve learned about life: it goes on.', author: 'Robert Frost' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
    { text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', author: 'Buddha' },
    { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
    { text: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' },
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'It is our choices, Harry, that show what we truly are, far more than our abilities.', author: 'J.K. Rowling' },
    { text: 'The best way to predict the future is to create it.', author: 'Peter Drucker' },
    { text: 'You can never cross the ocean until you have the courage to lose sight of the shore.', author: 'Christopher Columbus' },
  ];

  return (
    <div className="quotes-container">
      <h2>Quote App</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="quote-box">
          <p>{quote.text}</p>
          <p className="author">- {quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default QuoteApp;
