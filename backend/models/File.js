const { Schema, model, ObjectId } = require('mongoose');

const File = Schema({
  fileName: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  typeOfFile: { type: String, required: true },
  sizeOfFile: { type: Number, default: 0 },
  pathToFile: { type: String, default: '' },
  currentUser: { type: ObjectId, ref: 'User' },
  parentOfFile: { type: ObjectId, ref: 'File' },
  childsOfFile: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('File', File);
