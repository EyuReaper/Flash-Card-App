// this component displays the list of cards
import React from "react";
import { useFlashcards } from "../context/FlashCardContext";

const FlashCardList = () => {
  const { cards, setCards } = useFlashcards();

  const toggleCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].flipped = !updatedCards[index].flipped;
    setCards(updatedCards);
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(updatedCards);
  };

  return (
    <ul className="flashcard-list">
      {cards.map((card, index) => (
        <li key={index} onClick={() => toggleCard(index)}>
          <p className="card">
            {card.flipped ? card.back : card.front}
            <span onClick={() => deleteCard(index)} className="delete-card">
              X
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FlashCardList;
