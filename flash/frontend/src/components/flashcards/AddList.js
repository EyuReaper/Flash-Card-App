// src/components/flashcards/AddList.js
import React, { useState } from "react";
import { useFlashcards } from "../context/FlashCardContext"; // Adjust path as necessary

const AddList = () => {
  const { cards } = useFlashcards(); // Get cards from the context
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  // Get unique categories
  const categories = Array.from(new Set(cards.map((card) => card.category)));

  return (
    <div className="add-list">
      <h2>Card List</h2>

      {/* Dropdown for selecting a category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          if (selectedCategory) {
            alert(`Selected category: "${selectedCategory}"`); // Placeholder for actual implementation
            setSelectedCategory(""); // Clear selection after use
          }
        }}
      >
        Add to Selected Category
      </button>

      {categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <h3>{category}</h3>
              <ul>
                {cards
                  .filter((card) => card.category === category)
                  .sort((a, b) => a.front.localeCompare(b.front)) // Sort by front title
                  .map((card, index) => (
                    <li key={index}>
                      {card.front} - {card.back}
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories available.</p>
      )}

      {cards.length === 0 && <p>No cards found for this category.</p>}
    </div>
  );
};

export default AddList;
