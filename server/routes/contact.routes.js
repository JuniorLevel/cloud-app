const Router = require('express');
const FeedBack = require('../models/FeedBack');

const router = new Router();

router.post('/form', async (req, res) => {
  try {
    const { email, username, message } = req.body;
    const feedback = new FeedBack({ email, username, message });
    const sendMessage = await FeedBack.findOne({ email });
    if (sendMessage) {
      return res.status(400).json({ message: 'Сообщение было отправлено!' });
    }
    await feedback.save();
    res.status(201).json({ message: 'Сообщение успешно отправлено!' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при отправке сообщения!' });
  }
});

module.exports = router;
