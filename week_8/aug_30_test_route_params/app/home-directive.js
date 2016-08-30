'use strict';

module.exports = function(app) {
  require('./home-controller')(app);
  app.directive('cfHome', function() {
    return {
      template: require('./home-template.html'),
      controller: 'HomeController',
      controllerAs: 'ctrl',
      scope: {}
    }
  });
};
