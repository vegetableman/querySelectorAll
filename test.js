var test = require('tape');
var $  = require('./index');

test('$("body") as query string, get NodeList as an array', function(t) {
  t.plan(2)
  var $el = $('body');
  t.is($el.length, 1, 'only one element');
  t.ok($el.forEach, 'has array prototype');
});


test('$(document.body) as query string, get the Node as an array', function(t) {
  t.plan(2)
  var $el = $(document.body);
  t.is($el.length, 1, 'only one element');
  t.ok($el.forEach, 'has array prototype');
});