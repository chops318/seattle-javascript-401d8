'use strict';

module.exports = function(app) {
  app.controller('AnotherComponentController', function() {
    this.contents = this.contents || 'no content';
  });
};
