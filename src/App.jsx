import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";
export default function App() {
  const cards = data.map((card, i) => {
    return <Card 
             key={i} 
             {...card} />;
  });
//   console.log(cards);
  return (
    <div className="container">
      <Navbar />
      <div className="cards">{cards}</div>
    </div>
  );
}
