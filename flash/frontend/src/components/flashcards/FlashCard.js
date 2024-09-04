// location src/flashcard/flashcard.js
import React from "react";

const flashcard = ({ flashcard, onDelete }) => {
  return (
    <div className="flashcard">
      <h2>{flashcard.question}</h2>
      <p>{flashcard.answer}</p>
      <button onClick={() => onDelete(flashcard.id)}>Delete</button>
    </div>
  );
};

export default flashcard;
