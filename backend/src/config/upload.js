const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({ 
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            // file.originalname: retorna a extensão do arquivo
            const ext = path.extname(file.originalname);
            // file.originalname: retorna o nome do arquivo vindo do cliente
            const name = path.basename(file.originalname, ext);
            // Date.now(): retorna o timestamp da data atual
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};