import React from "react";
import { FlashcardProvider } from "./components/context/FlashCardContext";
import FlashCardList from "./components/flashcards/FlashCardList";
import AddFlashCard from "./components/flashcards/AddFlashCard";
import ParentComponent from "./ParentComponent";
import ErrorBoundary from "./components/flashcards/ErrorBoundary";

const App = () => {
  return (
    <FlashcardProvider>
      <div id="app">
        <h1>Custom Flashcard</h1>
        <AddFlashCard />
        <FlashCardList />
        <ErrorBoundary>
          <ParentComponent /> {/* Consider if AddList should be here */}
        </ErrorBoundary>
      </div>
    </FlashcardProvider>
  );
};

export default App;
