'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/note-list')(testApp);

describe('component: cfNoteItem', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($componentController) {
    this.cc = $componentController;
    this.notes = [{text: 'test 1'}, {text: 'test 2'}];
  }));

  it('should be a child of noteList', function() {
    let noteList = this.cc('cfNoteList', null, {notes: this.notes});
    let noteItem = this.cc('cfNoteItem', null, {note: this.notes[0], listCtrl: noteList});
    noteItem.listCtrl.removeNote(noteItem.note); //click the x button
    expect(noteList.notes.length).toBe(1);
    expect(noteItem.note.text).toBe('test 1');
    expect(this.notes.length).toBe(1);
  });

  it('should remove a note from the noteList controller', function() {
    let removeNote = jasmine.createSpy('removeNote');
    let noteItem = this.cc('cfNoteItem', null, {note: this.notes[0], listCtrl: {removeNote}});
    noteItem.listCtrl.removeNote(noteItem.note);
    expect(removeNote).toHaveBeenCalledWith(this.notes[0]);
    expect(this.notes.length).toBe(2);
  });
});
