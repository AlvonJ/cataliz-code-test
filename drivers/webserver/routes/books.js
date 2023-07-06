const booksDb = require('../../../dao/books-db/');

exports.index = (req, res, next) => {
  booksDb.getAllBooks().then(data => {
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  });
};

exports.show = (req, res, next) => {
  booksDb.getBook('id', req.params.id).then(data => {
    if (!data) return next();

    res.status(200).json({
      status: 'success',
      data,
    });
  });
};

exports.create = (req, res, next) => {
  booksDb
    .addBook(req.body)
    .then(data => {
      res.status(201).json({
        status: 'success',
        data,
      });
    })
    .catch(next);
};

exports.update = (req, res, next) => {
  booksDb
    .updateBook(req.params.id, req.body)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data,
      });
    })
    .catch(next);
};

exports.delete = (req, res, next) => {
  booksDb
    .deleteBook(req.params.id)
    .then(_ => {
      res.status(204).json({
        status: 'success',
        data: null,
      });
    })
    .catch(next);
};
