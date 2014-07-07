var fs = require('fs');

var path = process.argv[2];
var suffix = '.'+process.argv[3];

var list =[];

String.prototype.contains = function() {
    return String.prototype.indexOf.apply( this, arguments ) !== -1;
};

fs.readdir(path, function(err, files){
  if(!err){
    for (var i = 0; i < files.length; i++) {
      if (files[i].contains(suffix)) {
        list.push(files[i]);
      }
    };
  }
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  };
});