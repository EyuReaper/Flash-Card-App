import React, { useState } from "react";
import "./style/App.css";
import AddList from "./components/flashcards/AddList";

const initialCards = [
  {
    front: 'The "First Computer Programmer"',
    back: "Ada Lovelace",
    category: "Programming",
  },
  {
    front: 'Invented the "Clarke Calculator"',
    back: "Edith Clarke",
  },
  {
    front: "Famous World War II Enigma code breaker",
    back: "Alan Turing",
  },
  {
    front: "Created satellite orbit analyzation software for NASA",
    back: "Dr. Evelyn Boyd Granville",
  },
];

const FlashCardApp = () => {
  const [cards, setCards] = useState(initialCards);
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [error, setError] = useState(false);

  const toggleCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].flipped = !updatedCards[index].flipped; // Toggle flipped state
    setCards(updatedCards);
  };

  const addNew = () => {
    if (!newFront.trim() || !newBack.trim() || !newCategory.trim()) {
      setError(true);
    } else {
      setCards([
        ...cards,
        { front: newFront, back: newBack, category: newCategory },
      ]);
      setNewFront("");
      setNewBack("");
      setNewCategory(""); // Reset category input
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

      <AddList cards={cards} />

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
            <div className={`card ${card.flipped ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  {card.front}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCard(index);
                    }}
                    className="delete-card"
                  >
                    X
                  </span>
                </div>
                <div className="card-back">
                  {card.back}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCard(index);
                    }}
                    className="delete-card"
                  >
                    X
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashCardApp;
