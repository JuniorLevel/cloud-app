const { Schema, model } = require('mongoose');

const FeedBack = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = model('Feedback', FeedBack);
