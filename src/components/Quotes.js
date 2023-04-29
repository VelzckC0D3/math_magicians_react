import './Quotes.css';
import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const category = 'imagination';
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'hOYQVu3+0rKoH3ywYlpISw==4Cs08SC8ztnACe0O' },
          contentType: 'application/json',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (hasError || quotes.length === 0) {
    return <div className="error">Something went wrong!</div>;
  }

  return (
    <div>
      {quotes.map((quote) => (
        <div className="quotesCont" key={quote}>
          <h2 className="quotesTitle">Quotes</h2>
          <p className="author">
            <span className="span">Author:</span>
            {' '}
            {quote.author}
          </p>
          <p className="quotes">
            <span className="span">Quote:</span>
            {' '}
            <q>
              {quote.quote}
            </q>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
