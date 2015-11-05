'use strict';

/*

drashid:~ drashid$ cd dev/github/sandbox/module/
drashid:module drashid (master)$ node
> var m = require('./module.js');
> m.doIt();

*/

(function (exports) {
  var i = 0;

  function countUp() {
    return ++i;
  }

  exports.doIt = function () {
    return countUp();
  };
}(typeof exports !== 'undefined' ? exports : window));
