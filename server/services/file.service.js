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
          return reject(new Error('Файл с таким именем уже существует'));
        }
      } catch (err) {
        console.log(err);
        return reject(new Error('Ошибка при создании папки'));
      }
    });
  }
}

module.exports = new FileService();
