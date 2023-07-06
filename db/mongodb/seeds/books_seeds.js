const mongoose = require('mongoose');
const Book = require('../models/book');

// Seeder Database
const seedDatabase = async () => {
  const book1 = {
    id: 1,
    name: 'Book 1',
    author: 'Author 1',
    pages: 200,
    year: 1920,
  };

  const book2 = {
    id: 2,
    name: 'Book 2',
    author: 'Author 2',
    pages: 300,
    year: 2004,
  };

  const book3 = {
    id: 3,
    name: 'Book 3',
    author: 'Author 3',
    pages: 192,
    year: 2002,
  };

  await Book.create(book1);
  await Book.create(book2);
  await Book.create(book3);
};

// Drop DB then call seedDatabase
mongoose.connection.collections.books.drop(async function () {
  await seedDatabase();
  mongoose.connection.close();
});
