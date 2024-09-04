import React from "react";
import Flashcard from "./FlashCard";

const FlashcardList = ({ flashcards, onDelete }) => {
  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          flashcard={flashcard}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
