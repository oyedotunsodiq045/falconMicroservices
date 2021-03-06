const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// preferred file upload lib
// const multer = require('multer');
// fileupload is an alternative to multer
// const fileupload = require('express-fileupload');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
// const upload = multer({ dest: 'uploads/' });

// Route files
const files = require('./routes/files');

// Load env vars
dotenv.config({
  path: './config/config.env',
});

// Connect DB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// File Uploading
// app.use(fileupload());

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')))

// Mount routers
app.use('/api/v1/files', files);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
