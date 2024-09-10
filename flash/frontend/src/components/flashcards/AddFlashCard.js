//this file provides for adding new flashcard to the UI
import React, { useState } from "react";
import { useFlashcards } from "../context/FlashCardContext";

const AddFlashCard = () => {
  const { setCards } = useFlashcards();
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [error, setError] = useState(false);

  const addNew = () => {
    if (!newFront || !newBack) {
      setError(true);
    } else {
      setCards((prevCards) => [
        ...prevCards,
        { front: newFront, back: newBack, flipped: false },
      ]);
      setNewFront("");
      setNewBack("");
      setError(false);
    }
  };

  return (
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
        <span className="error">Oops! Flashcards need a front and a back.</span>
      )}
    </div>
  );
};

export default AddFlashCard;
