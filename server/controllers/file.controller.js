const FileService = require('../services/file.service');
const File = require('../models/File');
const User = require('../models/User');
const fs = require('fs');
const path = require('path');
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
        file.pathToFile = `${parentFile.pathToFile}/${file.fileName}`;
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
      return res.status(500).json({ message: 'Файлы не найдены' });
    }
  }

  async uploadFile(req, res) {
    try {
      let pathToUpload;
      const file = req.files.file;
      const parentFolder = await File.findOne({
        currentUser: req.user.id,
        _id: req.body.parentOfFile,
      });
      const user = await User.findOne({ _id: req.user.id });
      if (user.usedSpace + file.size > user.diskSpace) {
        return res.status(400).json({ message: 'Недостаточно места на диске' });
      } else {
        user.usedSpace += file.size;
      }
      if (!parentFolder) {
        pathToUpload = path.join(__dirname, `../files/${user.id}/${file.name}`);
      }
      if (parentFolder) {
        pathToUpload = path.join(
          __dirname,
          `../files/${parentFolder.currentUser}/${parentFolder.pathToFile}/${file.name}`,
        );
      }
      if (fs.existsSync(pathToUpload)) {
        return res.status(400).json({ message: 'Файл уже загружен' });
      }
      file.mv(pathToUpload);
      const typeOfUploadFile = file.name.split('.').pop();
      let filePath = file.name;
      if (parentFolder) {
        filePath = `${parentFolder.pathToFile}/${file.name}`;
      }
      await User.findOneAndUpdate(
        { _id: user._id },
        { $inc: { fileStoredTotal: 1 } },
        { new: true },
      );
      const uploadedFile = new File({
        fileName: file.name,
        typeOfFile: typeOfUploadFile,
        sizeOfFile: file.size,
        pathToFile: filePath,
        parentOfFile: req.body.parentOfFile,
        currentUser: user.id,
      });
      await uploadedFile.save();
      await user.save();
      return res.json(uploadedFile);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Не удалось загрузить файл' });
    }
  }
  async downloadFile(req, res) {
    try {
      const file = await File.findOne({
        _id: req.query.id,
        currentUser: req.user.id,
      });
      if (!file) {
        return res.status(400).json({ message: 'Ошибка при скачивании файла' });
      }
      const pathToFile = FileService.getPath(file);
      if (fs.existsSync(pathToFile)) {
        return res.download(pathToFile, file.fileName);
      } else {
        return res.status(400).json({ message: 'Не удалось скачать файл' });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: 'Не удалось скачать файл' });
    }
  }
  async deleteFile(req, res) {
    try {
      const file = await File.findOne({
        _id: req.query.id,
        currentUser: req.user.id,
      });
      const user = await User.findOne({ _id: req.user.id });
      if (!file) return res.status(400).json({ message: 'Файл не найден' });
      FileService.deleteFile(file);
      await file.deleteOne();
      if (file.typeOfFile !== 'dir') {
        await User.findOneAndUpdate(
          { _id: user._id },
          { $inc: { fileStoredTotal: -1 } },
          { new: true },
        );
        user.usedSpace -= file.sizeOfFile;
        if (user.usedSpace < 0) user.usedSpace = 0;
      }
      await user.save();
      return res.json(file);
    } catch (err) {
      return res
        .status(400)
        .json({ message: 'Папка не пуста. Удалите вложенные файлы' });
    }
  }
}

module.exports = new FileController();
