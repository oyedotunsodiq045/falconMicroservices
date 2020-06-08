const express = require('express');
const {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile
} = require('../controllers/files');

const router = express.Router();

router
  .route('/')
  .get(getFiles)
  .post(createFile);

router
  .route('/:id')
  .get(getFile)
  .put(updateFile)
  .delete(deleteFile);

module.exports = router;
