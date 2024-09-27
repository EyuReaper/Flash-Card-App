// src/components/context/FlashCardContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
export const FlashcardContext = createContext(); // Ensure this is defined

export const FlashcardProvider = ({ children }) => {
  const [cards, setCards] = useState([]); // Initialize state for cards

  return (
    <FlashcardContext.Provider value={{ cards, setCards }}>
      {children} {/* Render children within the provider */}
    </FlashcardContext.Provider>
  );
};

// Custom hook for accessing the context
export const useFlashcards = () => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcards must be used within a FlashcardProvider");
  }
  return context;
};
