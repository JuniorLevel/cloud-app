const FileService = require('../services/file.service');
const File = require('../models/File');

class FileController {
  async createDirectory(req, res) {
    try {
      const { fileName, typeOfFile, parentOfFile } = req.body;
      const file = new File({
        fileName,
        typeOfFile,
        parentOfFile: parentOfFile,
        currentUser: req.user.id,
      });
      const parentFile = await File.findOne({
        _id: parentOfFile,
      });
      if (!parentFile) {
        file.pathToFile = fileName;
        await FileService.createFolder(file);
      } else {
        file.pathToFile = `${parentFile.fileName}/${file.fileName}`;
        await FileService.createFolder(file);
        parentFile.childsOfFile.push(file.id);
        await parentFile.save();
      }
      await file.save();
      return res.json(file);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async getAllFiles(req, res) {
    try {
      const files = await File.find({
        currentUser: req.user.id,
        parentOfFile: req.query.parentOfFile,
      });
      return res.json(files);
    } catch (err) {
      res.status(500).json({ message: 'Файлы не найдены' });
    }
  }
}

module.exports = new FileController();
