'use strict';

module.exports = function(app) {
  app.directive('cfNoteForm', function() {
    return {
      template: require('./note-form-template.html'),
      controller: 'NoteFormController',
      controllerAs: 'ctrl',
      scope: {
        save: '&',
        buttonText: '@',
        note: '='
      }
    }
  }) ;
};
