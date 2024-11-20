
  import React, { useState } from "react";
import { quotes } from "../components/quotes"; // Import the quotes

const QuoteCard: React.FC = () => {
  // State to hold the current quote
  const [quote, setQuote] = useState<{ content: string; author: string } | null>(null);

  // Function to fetch a random quote from the quotes array
  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-card">
      {quote ? (
        <>
          <p className="quote">"{quote.content}"</p>
          <p className="author">- {quote.author}</p>
        </>
      ) : (
        <p>Click the button to get a quote!</p>
      )}
      <button onClick={fetchQuote} className="fetch-btn">
        New Quote
      </button>
    </div>
  );
};

export default QuoteCard;
