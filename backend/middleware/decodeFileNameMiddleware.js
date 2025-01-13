const iconv = require('iconv-lite');

module.exports = (req, res, next) => {
  if (req.files) {
    for (let key of Object.keys(req.files)) {
      const file = req.files[key];
      file.name = decodeURIComponent(file.name);
      file.name = iconv.decode(Buffer.from(file.name, 'binary'), 'utf8');
    }
  }
  next();
};
