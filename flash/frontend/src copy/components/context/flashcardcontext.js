import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await axios.get("http://localhost:5000/flashcards");
      setFlashcards(response.data);
    };
    fetchFlashcards();
  }, []);

  const addFlashcard = async (flashcard) => {
    const response = await axios.post(
      "http://localhost:5000/flashcards",
      flashcard
    );
    setFlashcards([...flashcards, response.data]);
  };

  const deleteFlashcard = async (id) => {
    await axios.delete(`http://localhost:5000/flashcards/${id}`);
    setFlashcards(flashcards.filter((flashcard) => flashcard._id !== id));
  };

  return (
    <FlashcardContext.Provider
      value={{ flashcards, addFlashcard, deleteFlashcard }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};
