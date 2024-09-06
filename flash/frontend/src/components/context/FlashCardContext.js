import axios from "axios";
import React, { useEffect, useState } from "react";

const FlashCardContext = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/flashcards"); // Ensure this URL is correct
        setFlashcards(response.data);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, []);

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

export default FlashCardContext;
