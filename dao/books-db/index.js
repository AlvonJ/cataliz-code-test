const { getAllBooks, getBook, getBookBy, addBook, updateBook, deleteBook } =
  // SWITCH Database (change require path)
  // require('./mongodb/index');
  require('./memory/index');

module.exports = {
  getAllBooks,
  getBook,
  getBookBy,
  addBook,
  updateBook,
  deleteBook,
};
