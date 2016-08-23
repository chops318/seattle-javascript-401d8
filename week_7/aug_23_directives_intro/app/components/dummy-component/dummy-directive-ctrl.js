'use strict';

module.exports = function(app) {
  app.controller('DummyDirectiveController', function() {
    this.contents = this.contents || 'hello from directive';
  });
};
