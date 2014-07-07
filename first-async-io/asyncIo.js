var fs = require('fs');

var buf,
    str,
    returns;

fs.readFile(process.argv[2], function(err, data){
  if (!err) {
    buf = data.toString();
  }
  returns = buf.split('\n').length - 1;
  console.log(returns);
});
