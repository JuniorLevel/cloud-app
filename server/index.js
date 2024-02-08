const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes');
const contactRouter = require('./routes/contact.routes');
const cors = require('cors');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/contact', contactRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(PORT, () => {
      console.log(`Server started on ${process.env.PORT} port`);
    });
  } catch (err) {
    throw new Error(err);
  }
};

start();
