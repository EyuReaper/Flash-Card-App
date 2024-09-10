// this file provides the context and provider for managing flashcards
import React, { createContext, useContext, useState } from "react";

const FlashCardContext = createContext(); // shares states across components

export const FlashcardProvider = ({ children }) => {
  const [cards, setCards] = useState([
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
  ]);

  return (
    <FlashCardContext.Provider value={{ cards, setCards }}>
      {children}
    </FlashCardContext.Provider>
  );
};

export const useFlashcards = () => {
  return useContext(FlashCardContext);
};
