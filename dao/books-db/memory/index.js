let BOOKS = require('../../../db/memory/books'); // DB
const makeBook = require('../../../models/book/index'); // model
const serialize = require('./serializer'); // serializer custom to db

const getAllBooks = () => {
  return Promise.resolve(serialize(BOOKS));
};

const getBook = (prop, val) => {
  const book = BOOKS.find(book => book[prop] == val);
  return Promise.resolve(serialize(book));
};

const getBookBy = (prop, val) => {
  const book = BOOKS.filter(book => book[prop] == val);
  return Promise.resolve(serialize(book));
};

const addBook = bookObject => {
  const book = makeBook(bookObject);
  const newBook = {
    id: BOOKS.length + 1,
    name: book.getName(),
    author: book.getAuthor(),
    pages: book.getPages(),
    year: book.getYear(),
  };
  BOOKS.push(newBook);
  return getBook('id', book.id);
};

const deleteBook = async id => {
  const book = await getBook({ id });
  if (book) {
    BOOKS = BOOKS.filter(book => book.id != id);
    return {
      id,
      status: 'success',
    };
  }
  return {
    status: 'fail',
  };
};

module.exports = {
  getAllBooks,
  getBook,
  getBookBy,
  addBook,
  deleteBook,
};
