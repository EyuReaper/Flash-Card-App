// src/components/flashcards/AddList.js
import React, { useState } from "react";
import { useFlashcards } from "../context/FlashCardContext"; // Adjust path as necessary
import "font-awesome/css/font-awesome.min.css"; // Ensure Font Awesome is imported

const AddList = () => {
  const { cards } = useFlashcards(); // Get cards from the context
  const [showCategories, setShowCategories] = useState(false); // State for toggling category list
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  // Get unique categories
  const categories = Array.from(new Set(cards.map((card) => card.category)));

  return (
    <div className="add-list">
      <h2>Card List</h2>

      {/* Button to toggle category list visibility with icons */}
      <button onClick={() => setShowCategories((prev) => !prev)}>
        {showCategories ? (
          <i className="fa fa-eye-slash" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-eye" aria-hidden="true"></i>
        )}
        {showCategories ? " Hide Categories" : " Show Categories"}
      </button>

      {showCategories && (
        <div>
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
            Use Selected Category
          </button>
        </div>
      )}

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
