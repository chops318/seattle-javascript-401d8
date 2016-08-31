'use strict';

module.exports = function(app) {
  app.component('cfNoteItem', {
    template: require('./note-item-template.html'),
    controller: 'NoteItemController',
    require: {
      listCtrl: '^cfNoteList'
    },
    bindings: {
      note: '<'
    },
  });
};
