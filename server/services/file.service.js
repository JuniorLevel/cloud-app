const fs = require('fs');
const path = require('path');

class FileService {
  createFolder(file) {
    return new Promise((resolve, reject) => {
      try {
        const filePath = path.join(
          __dirname,
          `../files/${file.currentUser}/${file.pathToFile}`,
        );
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve('Папка успешно создана');
        } else {
          return reject(new Error('Папка с таким именем уже существует'));
        }
      } catch (err) {
        console.log(err);
        return reject(new Error('Ошибка при создании папки'));
      }
    });
  }
  deleteFile(file) {
    const path = this.getPath(file);
    if (file.typeOfFile === 'dir') {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }

  getPath(file) {
    return path.join(
      __dirname,
      `../files/${file.currentUser}/${file.pathToFile}`,
    );
  }
}

module.exports = new FileService();
