const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const multer = require('multer');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const upload = multer({ dest: 'uploads/' })

// Route files
const genres = require('./routes/files');

// Load env vars
dotenv.config({
  path: './config/config.env',
});

// Connect DB
connectDB();

const app = express();

app.use(express.urlencoded({extended:true}));

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/files/file', files);

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

// const get = require();
// const post = require();
// const update = require();
// const remove = require();

// app.use('api/v1/files/file/uploads', get);
// app.use('api/v1/files/file/upload', post);
// app.use('api/v1/files/file/:id/update', update);
// app.use('api/v1/files/file/:id/delete', remove);

// const port = (process.env.PORT || 3000);
// app.listen(port, ()=> `Server now running on ${port}`)