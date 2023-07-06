const createBook = require('./book');
const bookSchema = require('./book-schema');
const bookValidator = require('../validator/')(bookSchema);

const makeBook = createBook(bookValidator);

module.exports = makeBook;
