const mongoose = require('../connection');

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  pages: Number,
  year: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
