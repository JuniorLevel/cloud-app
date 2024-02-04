const Router = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/reg', async (req, res) => {
  try {
    const { username, age, gender, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const user = new User({
      username,
      age,
      gender,
      email,
      password: hashPassword,
    });
    await user.save();
    return res.json({
      message: 'Пользователь успешно создан!',
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        filedStoredTotal: user.filedStoredTotal,
        username: user.username,
        age: user.age,
        gender: user.gender,
        createdAt: user.createdAt,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        filedStoredTotal: user.filedStoredTotal,
        username: user.username,
        age: user.age,
        gender: user.gender,
        createdAt: user.createdAt,
      },
    });
  } catch (e) {
    res.send({ message: 'Server error' });
  }
});

router.get('/auth', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        filedStoredTotal: user.filedStoredTotal,
        username: user.username,
        age: user.age,
        gender: user.gender,
        createdAt: user.createdAt,
      },
    });
  } catch (e) {
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
