'use strict';

module.exports = function(app) {
  app.directive('cfNoteItem', function() {
    return {
      template: require('./note-item-template.html'),
      controller: 'NoteItemController',
      controllerAs: 'ctrl',
      bindToController: true,
      require: '^cfNoteList',
      scope: {
        note: '='
      },
      link: function($scope, $elem, $attr, $controller) {
        $scope.ctrl.removeNote = $controller.removeNote;
      }
    };
  });
};
