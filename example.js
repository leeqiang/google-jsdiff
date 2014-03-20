
require('colors')
var gdiff = require('./giff')

var gd = new gdiff();
var one = 'beep boop';
var other = 'beep boob blah';

var diff = gd.diff_main(one, other);
diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  var color = part[0] == 1 ? 'green' :
    part[0] == -1 ? 'red' : 'grey';
  process.stderr.write(part[1][color]);
});

console.log();
