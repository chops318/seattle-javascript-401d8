'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/note-list')(testApp);

describe('note list component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($componentController) {
    this.cc = $componentController;
    this.notes = [{text: 'test 1'}, {text: 'test 2'}, {text: 'test a'}];
  }));

  it('should remove a note', function() {
    let bindings = {notes: this.notes};
    let noteList = this.cc('cfNoteList', null, bindings);
    noteList.removeNote(this.notes[0]);
    expect(noteList.notes.length).toBe(2);
    expect(bindings.notes.length).toBe(2);
  });
});
