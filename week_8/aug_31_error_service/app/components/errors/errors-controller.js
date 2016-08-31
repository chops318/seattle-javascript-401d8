'use strict';

module.exports = function(app) {
  app.controller('ErrorsController', ['cfErrors', function(cfErrors) {
    this.dismiss = cfErrors.remove.bind(cfErrors);
    this.errors = cfErrors.errors;
  }]);
};
