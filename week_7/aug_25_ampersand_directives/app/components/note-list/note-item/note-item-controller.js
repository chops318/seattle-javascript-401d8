'use strict';

module.exports = function(app) {
  app.controller('NoteItemController', function() {
    this.updateNote = () => {
      this.note.editing = false;
    };
  });
};
