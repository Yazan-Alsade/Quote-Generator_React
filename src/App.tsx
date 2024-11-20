import React from "react";
import QuoteCard from "./components/quoteCard";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <QuoteCard />
    </div>
  );
};

export default App;
