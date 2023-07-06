const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

// Middleware to catch error
app.use((err, req, res, next) => {
  if (err) {
    if (!err.statusCode) err.statusCode = 500;

    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  next();
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Page does not exist',
  });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION!');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
