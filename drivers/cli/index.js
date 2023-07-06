const args = require('yargs-parser')(process.argv.slice(2));
const booksDb = require('../../dao/books-db/index');

const printHelp = function () {
  console.log(`
    Help usage:
    --index  list books
    --show   find book by {ID}
    --delete delete book by {ID}
    --help   print help
  `);
};

const valid = args.index || args.show || args.delete;

if (args.help || !valid) {
  printHelp();
  process.exit(1);
}

if (args.index) {
  booksDb.getAllBooks().then(data => {
    console.log(data);
    process.exit(1);
  });
}

if (args.delete) {
  booksDb.deleteBook(args.delete).then(data => {
    console.log(data);
    process.exit(1);
  });
}

if (args.show) {
  booksDb.getBook('id', args.show).then(data => {
    console.log(data);
    process.exit(1);
  });
}
