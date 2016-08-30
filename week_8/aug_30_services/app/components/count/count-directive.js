'use strict';

module.exports = function(app) {
  app.directive('cfCount', function() {
    return {
      controller: 'CountController',
      controllerAs: 'ctrl',
      template: require('./count-template.html'),
      bindToController: true,
      scope: {} 
    }
  });
};
