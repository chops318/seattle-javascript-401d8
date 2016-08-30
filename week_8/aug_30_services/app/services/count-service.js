'use strict';

module.exports = function(app) {
  app.factory('cfCount', function() {
    return {
      currentCount: 0,
      increase: function() {
        this.currentCount++; 
      },
      getCount: function() {
        return this.currentCount;
      }
    };
  });
};
