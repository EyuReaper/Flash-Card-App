import React from "react";
import { FlashcardProvider } from "./components/context/FlashCardContext";
import FlashcardList from "./components/flashcards/FlashCardList";
import AddFlashcard from "./components/flashcards/AddFlashCard";
import "./styles/App.css";

const App = () => {
  return (
    <FlashcardProvider>
      <div className="app">
        <h1>Flashcard App</h1>
        <AddFlashcard />
        <FlashcardList />
      </div>
    </FlashcardProvider>
  );
};

export default App;
