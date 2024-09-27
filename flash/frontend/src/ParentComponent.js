// src/ParentComponent.js
import React, { useContext } from "react";
import AddList from "./components/flashcards/AddList";
import { FlashcardContext } from "./components/context/FlashCardContext";

const ParentComponent = () => {
  const { cards } = useContext(FlashcardContext);

  return <AddList cards={cards} />;
};

export default ParentComponent;
