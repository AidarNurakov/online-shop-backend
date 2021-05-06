const formidable = require('formidable');

exports.parseFormData = function (req, res, next) {
  const form = formidable({
    multiples: true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    req.body = fields;
    req.files = files;

    next();
  });
}