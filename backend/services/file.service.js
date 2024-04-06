const fs = require('fs');
const { promises: fsPromises } = require('fs');
class FileService {
  async createFolder(req, file) {
    const filePath = this.getPath(req, file);
    try {
      await fsPromises.access(filePath);
      return Promise.reject(new Error('Папка с таким именем уже существует'));
    } catch (err) {
      try {
        await fsPromises.mkdir(filePath);
        return Promise.resolve('Папка успешно создана');
      } catch (err) {
        return Promise.reject(new Error('Ошибка при создании папки'));
      }
    }
  }

  deleteFile(req, file) {
    const path = this.getPath(req, file);
    if (file.typeOfFile === 'dir') {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }

  getPath(req, file) {
    const directoryPath = `${req.filePath}/${file.currentUser}/${file.pathToFile}`;
    return directoryPath;
  }
}

module.exports = new FileService();
