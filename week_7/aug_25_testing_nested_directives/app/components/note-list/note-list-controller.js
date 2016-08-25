'use strict';

module.exports = function(app) {
  app.controller('NoteListController', function() {
    this.removeNote = (note) => {
      this.notes.splice(this.notes.indexOf(note), 1);
    };
  });
};
