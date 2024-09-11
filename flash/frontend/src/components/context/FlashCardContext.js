// this file provides the context and provider for managing flashcards
import React, { createContext, useContext, useState } from "react";

const FlashCardContext = createContext(); // shares states across components

export const FlashcardProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      front: 'The "First Computer Programmer"',
      back: "Ada Lovelace",
      flipped: false,
      color: "#51aae5",
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: "Edith Clarke",
      flipped: false,
      color: "#feca34",
    },
    {
      front: "Famous World War II Enigma code breaker",
      back: "Alan Turing",
      flipped: false,
      color: "#a17de9",
    },
    {
      front: "Created satellite orbit analyzation software for NASA",
      back: "Dr. Evelyn Boyd Granville",
      flipped: false,
      color: "#feca34",
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
