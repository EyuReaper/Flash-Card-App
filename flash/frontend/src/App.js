//this is the main application component that ties everything together
import React from "react";
import { FlashcardProvider } from "./components/context/FlashCardContext";
import FlashCardList from "./components/flashcards/FlashCardList";
import AddFlashCard from "./components/flashcards/AddFlashCard";

const App = () => {
  return (
    <FlashcardProvider>
      <div id="app">
        <h1>Custom Flashcard</h1>
        <AddFlashCard />
        <FlashCardList />
      </div>
    </FlashcardProvider>
  );
};

export default App;
