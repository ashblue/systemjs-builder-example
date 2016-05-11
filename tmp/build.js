"bundle";
(function() {
var define = System.amdDefine;
define("rel-file.js", [], function() {
  console.log('rel-file');
  return 'relative file';
});

})();
System.register("app.js", ["jquery", "./rel-file.js"], function($__export) {
  "use strict";
  var $,
      rel,
      hello;
  return {
    setters: [function($__m) {
      $ = $__m.default;
    }, function($__m) {
      rel = $__m.default;
    }],
    execute: function() {
      hello = 'es6';
      $__export("hello", hello);
    }
  };
});
