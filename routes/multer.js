const path = require('path')
const multer = require('multer');

const uploadPath = path.join(__dirname, '../files/images');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  
    cb(null, uploadPath);
  },
  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);

    req.fileName = fileName;
    cb(null, fileName);
  },
  filters: () => {
    
  }
});

exports.upload = multer({
  storage: storage,
  dest: uploadPath
});

