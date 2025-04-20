import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlashcardProvider } from "./components/context/FlashCardContext";
import FlashCardList from "./components/flashcards/FlashCardList";
import AddFlashCard from "./components/flashcards/AddFlashCard";
import ParentComponent from "./ParentComponent";
import ErrorBoundary from "./components/flashcards/ErrorBoundary";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import AddList from "./components/flashcards/AddList";

const App = () => {
  return (
    <FlashcardProvider>
      <Router>
        <div id="app">
          <Navbar />
          <div id="header">
            <h1>Custom Flashcard</h1>
          </div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
          <ErrorBoundary>
            <ParentComponent />
          </ErrorBoundary>
        </div>
            <AddFlashCard />
          <FlashCardList />
          <AddList/>
          <Footer />
      </Router>
    </FlashcardProvider>
  );
};

export default App;
