const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Войдите в аккаунт' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Ошибка аутентификации' });
  }
};
