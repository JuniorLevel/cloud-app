const FeedBack = require('../models/FeedBack');

class ContactController {
  async sendContactForm(req, res) {
    try {
      const { email, username, message } = req.body;
      const feedback = new FeedBack({ email, username, message });
      const sendMessage = await FeedBack.findOne({ email });
      if (sendMessage) {
        return res.status(400).json({ message: 'Сообщение было отправлено!' });
      }
      await feedback.save();
      return res.status(201).json({ message: 'Сообщение успешно отправлено!' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Ошибка при отправке сообщения!' });
    }
  }
}

module.exports = new ContactController();
