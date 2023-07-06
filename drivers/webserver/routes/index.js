const express = require('express');
const router = express.Router();

const books = require('./books');

router
  .get('/books', books.index)
  .get('/books/:id', books.show)
  .post('/books', books.create)
  .put('/books/:id', books.update)
  .delete('/books/:id', books.delete);

module.exports = router;
