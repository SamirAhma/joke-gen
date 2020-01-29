const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  jokelist: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  punchline: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  }
});

const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;
