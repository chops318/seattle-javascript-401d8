'use strict';

module.exports = function(app) {
  app.factory('cfErrors', function() {
    return {
      errors: [],
      add: function(err) {
        this.errors.push(err);
      },
      remove: function(err) {
        this.errors.splice(this.errors.indexOf(err), 1);
      },
      getAll: function() {
        return this.errors;
      }
    }
  });
};
