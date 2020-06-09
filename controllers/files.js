const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const File = require('../models/File');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// @desc    Get all Files
// @route   GET /api/v1/files
// @access  Public
exports.getFiles = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: 'Files Found',
  });
});

// @desc    Get single File
// @route   GET /api/v1/files/:id/file
// @access  Public
exports.getFile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: `File Found ${req.params.id}`,
  });
});

// @desc    Create new File
// @route   POST /api/v1/files
// @access  Private
exports.createFile = asyncHandler(async (req, res, next) => {
  res.status(201).json({
    status: true,
    message: 'File Uploaded',
  });
});

// @desc    Update File
// @route   PUT /api/v1/files/:id/file
// @access  Private
exports.updateFile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: `File Updated ${req.params.id}`,
  });
});

// @desc    Delete File
// @route   DELETE /api/v1/files/:id/file
// @access  Private
exports.deleteFile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: `File Deleted ${req.params.id}`,
  });
});
