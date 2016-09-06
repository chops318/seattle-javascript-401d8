'use strict';

module.exports = (app) => {
  app.directive('cfListForm', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'ctrl',
      template: require('./list-form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
