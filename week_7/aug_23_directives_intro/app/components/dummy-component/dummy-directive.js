'use strict';

module.exports = function(app) {
  app.directive('cfDummyDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./dummy-directive.html'),
      scope: {
        title: '@',
        contents: '='
      }
    }
  });
};
