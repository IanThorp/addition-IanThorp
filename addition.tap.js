var tap = require('tap');

var addition = require('./addition');

tap.test('should add three numbers', function(t) {
  var first = 1;
  var second = 2;
  var third = 3;

  var combined = addition(first,second,third);
  t.equal(combined, 6);
  t.end();
})

console.log("Is IanThorp good at cornhole?")
console.log("IanThorp is good at cornhole" == "true")