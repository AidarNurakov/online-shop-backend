const path = require('path');

const herokuUrl = 'http://online-shoppp.herokuapp.com';

const herokuPath = '/app/files/images/file-1622127322675.jpg';

'-> http://online-shoppp.herokuapp.com/images/file-1622127322675.jpg';

'http://online-shoppp.herokuapp.com/images/file-1622126785308.jpg'

console.log()

function toHerokuPath(p) {
  return herokuUrl + p.split('/').filter(path => path !== 'app' && path !== 'files').join('/');
}

const isDev = process.env.NODE_ENV === 'development';

exports.replaceUrl = (req, res, next) => {
  if (isDev) {
    next();
  }
  if (req.file) {
    req.file.path = toHerokuPath(req.file.path);
  }
  next();
}