const Router = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const AuthController = require('../controllers/auth.controller');

const router = new Router();

router.post('/reg', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/auth', authMiddleware, AuthController.auth);
router.get('/user-info', authMiddleware, AuthController.getUserInfo);

module.exports = router;
