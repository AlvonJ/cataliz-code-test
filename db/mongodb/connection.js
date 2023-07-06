const mongoose = require('mongoose');
const dotenv = require('dotenv');

// SET ENV PATH
dotenv.config({ path: './config.env' });

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);

// Change DATABASE <PASSWORD> to DATABASE_PASSWORD
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connect to database using mongoose
mongoose.connect(DB);

// Signal connection
mongoose.connection
  .once('open', function () {
    console.log('Connection has been made');
  })
  .on('error', function (error) {
    console.log('Connect error', error);
  })
  .on('disconnected', function () {
    console.log('Connection disconnected');
  });

module.exports = mongoose;
