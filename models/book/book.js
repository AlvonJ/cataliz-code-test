const createBook = function (bookValidator) {
  return ({ name, author, pages, year } = {}) => {
    const { error } = bookValidator({ name, author, pages, year });
    if (error) throw new Error(error);

    return {
      getName: () => name,
      getAuthor: () => author,
      getPages: () => pages,
      getYear: () => year,
    };
  };
};

module.exports = createBook;
