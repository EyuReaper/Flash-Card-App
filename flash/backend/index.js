//index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

//Connects to MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.log(err));

//flashcard schema
const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const flashcard = mongoose.model("flashcard", flashcardSchema);

//CRUD routes
app.get("/flashcard", async (req, res) => {
  const flashcard = await flashcard.find();
  res.json(flashcard);
});

app.listen(PORT, () => {
  console.log("server running on ${PORT}");
});

//!issue with the server returning "handshake error"
