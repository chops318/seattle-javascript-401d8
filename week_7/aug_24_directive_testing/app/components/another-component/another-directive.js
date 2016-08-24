'use strict';

module.exports = function(app) {
  app.directive('cfAnotherDirective', function() {
    return {
      template: require('./another-component.html'),
      controller: 'AnotherComponentController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
