'use strict';

module.exports = function(app) {
  app.directive('cfNoteList', function() {
    return {
      controller: 'NoteListController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: require('./note-list-template.html'), 
      scope: {
        title: '@',
        notes: '=' 
      }
    };
  });
};
