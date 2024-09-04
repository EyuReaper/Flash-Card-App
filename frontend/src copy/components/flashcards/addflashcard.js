import React, { useState, useContext } from "react";
import { FlashcardContext } from "../Context/FlashcardContext";

const AddFlashcard = () => {
  const { addFlashcard } = useContext(FlashcardContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFlashcard = { question, answer };
    await addFlashcard(newFlashcard);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcard;
