var dirReader = require('./dirReader');

var path = process.argv[2];
var suffix = process.argv[3];

dirReader(path, suffix, function(err, files){
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  };
});