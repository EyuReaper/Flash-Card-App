import React from "react";
import { FlashcardProvider } from "./components/context/FlashCardContext";
import FlashCardList from "./components/flashcards/FlashCardList";
import AddFlashCard from "./components/flashcards/AddFlashCard";
import ParentComponent from "./ParentComponent";
import ErrorBoundary from "./components/flashcards/ErrorBoundary";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <FlashcardProvider>
      <div id="app">
        <Navbar />
        <div id="header">
          <h1>Custom Flashcard</h1>
          <AddFlashCard />
        </div>
        <FlashCardList />
        <ErrorBoundary>
          <ParentComponent />
        </ErrorBoundary>
      </div>
    </FlashcardProvider>
  );
};

export default App;
