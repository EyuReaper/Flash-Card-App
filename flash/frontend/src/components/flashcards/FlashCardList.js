import React from "react";

// eslint-disable-next-line no-unused-vars
const flashcards = []; // Example usage if you need to keep it
const FlashCardList = ({ flashcards }) => {
  // Check if flashcards is defined and has items
  if (!flashcards || flashcards.length === 0) {
    return <div>No flashcards available.</div>; // Handle empty state
  }

  return (
    <div>
      {flashcards.map((card) => (
        <div key={card.id}>
          <h3>{card.question}</h3>
          <p>{card.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCardList;
