const Router = require('express');
const ContactController = require('../controllers/contact.controller');

const router = new Router();

router.post('/form', ContactController.sendContactForm);

module.exports = router;
