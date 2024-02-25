const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  fileStoredTotal: { type: Number, default: 0 },
  files: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('User', User);
