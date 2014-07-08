module.exports = function(dir, ext, cb) {
  var fs = require('fs');
  var path = require('path');

  var filePath = dir;
  var suffix = '.' + ext;

  var list =[];

  fs.readdir(filePath, function(err, files){
    if(err){
      cb(err, null);
    } else {
      files.forEach(function(file){
        if(path.extname(file) === suffix){
          list.push(file);
        }
      });
      return cb(null, list);
    }
  });
};