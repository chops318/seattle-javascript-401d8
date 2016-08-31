'use strict';

module.exports = function(app) {
  app.component('cfNoteList', {
    controller: 'NoteListController',
    template: require('./note-list-template.html'), 
    bindings: {
      title: '@',
      notes: '<' 
    }
  });
};
