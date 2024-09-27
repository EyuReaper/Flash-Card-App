// AddList.js
import React, { useState } from "react";

const AddList = ({ cards }) => {
  const [filterCategory, setFilterCategory] = useState("");
  const [newCategory, setNewCategory] = useState(""); // State for new category
  const [cardList, setCardList] = useState(cards); // State for managing card list

  const handleAddCategory = () => {
    if (
      newCategory &&
      !cardList.some((card) => card.category === newCategory)
    ) {
      // Add a new category to the card list (example structure)
      const newCards = [
        ...cardList,
        { category: newCategory }, // Example card data
      ];
      setCardList(newCards);
      setNewCategory(""); // Clear input
    }
  };

  const filteredCards = filterCategory
    ? cardList.filter(
        (card) => card.category.toLowerCase() === filterCategory.toLowerCase()
      )
    : cardList;

  const categories = Array.from(new Set(cardList.map((card) => card.category))); // Get unique categories

  return (
    <div className="add-list">
      <h2>Card List</h2>
      <input
        type="text"
        placeholder="Filter by category"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      />
      {/* Input for new category */}
      <input
        type="text"
        placeholder="Add new category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>{" "}
      {/* Add Button */}
      {categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <h3>{category}</h3>
              <ul>
                {filteredCards
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
      {filteredCards.length === 0 && <p>No cards found for this category.</p>}
    </div>
  );
};

export default AddList;
