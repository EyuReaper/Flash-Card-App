import React from "react";
import { FlashcardProvider } from "./components/Context/FlashcardContext";
import FlashcardList from "./components/Flashcards/FlashcardList";
import AddFlashcard from "./components/Flashcards/AddFlashcard";
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
