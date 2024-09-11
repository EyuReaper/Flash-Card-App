import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFlashcards } from "../context/FlashCardContext";

const AddFlashCard = () => {
  const { cards, setCards } = useFlashcards();
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [color, setColor] = useState("#51aae5"); // Default color

  const handleAddCard = () => {
    if (front && back) {
      const newCard = {
        front,
        back,
        flipped: false,
        color, // Use the selected color
      };
      setCards([...cards, newCard]); // Add the new card to the existing cards
      setFront(""); // Clear input
      setBack(""); // Clear input
    }
  };

  return (
    <div>
      <h2>Add a New Flashcard</h2>
      <input
        type="text"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        placeholder="Front"
        required
      />
      <input
        type="text"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        placeholder="Back"
        required
      />
      <div className="color-input">
        <FontAwesomeIcon icon="fa-solid fa-palette" />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default AddFlashCard;
