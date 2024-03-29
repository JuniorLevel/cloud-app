const Router = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const FileController = require('../controllers/file.controller');
const router = new Router();

router.post('', authMiddleware, FileController.createDirectory);
router.get('', authMiddleware, FileController.getAllFiles);
router.post('/upload', authMiddleware, FileController.uploadFile);
router.get('/download', authMiddleware, FileController.downloadFile);
router.delete('', authMiddleware, FileController.deleteFile);

module.exports = router;
