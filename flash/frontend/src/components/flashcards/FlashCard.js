import React, { useState } from "react";
import "./style/App.css";

const initialCards = [
  {
    front: 'The "First Computer Programmer"',
    back: "Ada Lovelace",
    flipped: false,
  },
  {
    front: 'Invented the "Clarke Calculator"',
    back: "Edith Clarke",
    flipped: false,
  },
  {
    front: "Famous World War II Enigma code breaker",
    back: "Alan Turing",
    flipped: false,
  },
  {
    front: "Created satellite orbit analyzation software for NASA",
    back: "Dr. Evelyn Boyd Granville",
    flipped: false,
  },
];

const FlashCardApp = () => {
  const [cards, setCards] = useState(initialCards);
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [error, setError] = useState(false);

  const toggleCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].flipped = !updatedCards[index].flipped;
    setCards(updatedCards);
  };

  const addNew = () => {
    if (!newFront || !newBack) {
      setError(true);
    } else {
      setCards([...cards, { front: newFront, back: newBack, flipped: false }]);
      setNewFront("");
      setNewBack("");
      setError(false);
    }
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(updatedCards);
  };

  return (
    <div id="flashcard-app" className="container">
      <h1>Custom Flashcard</h1>

      <div className="flashcard-form">
        <label htmlFor="front">
          Front
          <input
            value={newFront}
            onChange={(e) => setNewFront(e.target.value)}
            type="text"
            id="front"
          />
        </label>
        <label htmlFor="back">
          Back
          <input
            value={newBack}
            onChange={(e) => setNewBack(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addNew()}
            type="text"
            id="back"
          />
        </label>
        <button onClick={addNew}>Add a New Card</button>
        {error && (
          <span className="error">
            Oops! Flashcards need a front and a back.
          </span>
        )}
      </div>

      <ul className="flashcard-list">
        {cards.map((card, index) => (
          <li key={index} onClick={() => toggleCard(index)}>
            <p className="card">
              {card.flipped ? card.back : card.front}
              <span onClick={() => deleteCard(index)} className="delete-card">
                X
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashCardApp;
