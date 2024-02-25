const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes');
const FileRouter = require('./routes/file.routes');
const contactRouter = require('./routes/contact.routes');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const decodeFileNameMiddleware = require('./middleware/decodeFileNameMiddleware');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload());
app.use(decodeFileNameMiddleware);
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/contact', contactRouter);
app.use('/files', FileRouter);

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
