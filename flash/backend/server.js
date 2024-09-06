// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Changed from app.use(json()) to express.json() for clarity

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.error("Mongo DB connection error:", err));

// Flashcard schema
const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema); // Fixed model name casing

// CRUD routes
app.get("/flashcards", async (req, res) => {
  // Updated route to match the common plural naming
  try {
    const flashcards = await Flashcard.find(); // Changed variable name to match model
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: "Server error", error }); // Added error handling
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Fixed template string syntax
});
