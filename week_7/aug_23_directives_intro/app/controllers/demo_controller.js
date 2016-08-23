'use strict';

module.exports = function(app) {
  app.controller('DemoController', function() {
    this.title = 'Awesome Title';
    this.contents = 'Hello World!';
  });
};
