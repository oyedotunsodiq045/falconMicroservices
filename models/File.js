const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a file']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('File', FileSchema);
