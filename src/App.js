import React from "react";
import "./App.css";
//Data
import cards from "./data";
//Components
import Card from "./Components/Card"; /* 1 */
// Card Back Image
import cardBack from "./images/CardBack.jpg";


function App() {
  let cardsGrid = cards.map(card => (
    <Card key={card.id} card={card} />
  )); /* 2, 3 */

  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">{cardsGrid}</div>
      </div>
    </div>
  );
}

export default App;
