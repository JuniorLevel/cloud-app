const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes');
const FileRouter = require('./routes/file.routes');
const contactRouter = require('./routes/contact.routes');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const decodeFileNameMiddleware = require('./middleware/decodeFileNameMiddleware');
const filepathMiddleware = require('./middleware/filepathMiddleware');
const path = require('path');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(filepathMiddleware(path.resolve(__dirname, 'files')));
app.use(cors());
app.use(fileUpload());
app.use(decodeFileNameMiddleware);
app.use('/auth', authRouter);
app.use('/contact', contactRouter);
app.use('/files', FileRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      console.log('Connected to MongoDB');
    });
  } catch (err) {
    throw new Error(err);
  }
};
start();
