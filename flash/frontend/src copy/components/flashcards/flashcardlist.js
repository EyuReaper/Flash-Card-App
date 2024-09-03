import React from "react";
import Flashcard from "./Flashcard";

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
