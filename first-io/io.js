var fs = require('fs');

var buf,
    str,
    returns;

buf = fs.readFileSync(process.argv[2]);
str = buf.toString();

returns = str.split('\n');

console.log(--returns.length);