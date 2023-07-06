let Book = require('../../../db/mongodb/models/book');
const makeBook = require('../../../models/book/index'); // model
const serialize = require('./serializer'); // serializer custom to db

const getAllBooks = () => {
  return Book.find({}).then(serialize);
};

const getBook = (prop, val) => {
  if (prop === 'id') prop = '_id';

  return Book.find({ [prop]: val }).then(res => {
    return serialize(res[0]);
  });
};

const getBookBy = (prop, val) => {
  return Book.find({ [prop]: val }).then(serialize);
};

const addBook = async bookObject => {
  const book = makeBook(bookObject);
  const newBook = {
    name: book.getName(),
    author: book.getAuthor(),
    pages: book.getPages(),
    year: book.getYear(),
  };
  const data = await Book.create(newBook);
  return serialize(data);
};

const updateBook = async (id, bookObject) => {
  const book = makeBook(bookObject);
  const newBook = {
    name: book.getName(),
    author: book.getAuthor(),
    pages: book.getPages(),
    year: book.getYear(),
  };
  const data = await Book.findByIdAndUpdate(id, newBook, { new: true });
  return serialize(data);
};

const deleteBook = id => {
  return Book.findByIdAndDelete(id)
    .then(res => {
      return {
        status: 'success',
        id: res._id.toString(),
      };
    })
    .catch(err => {
      return {
        status: 'fail',
        message: err,
      };
    });
};

module.exports = {
  getAllBooks,
  getBook,
  getBookBy,
  addBook,
  deleteBook,
  updateBook,
};
