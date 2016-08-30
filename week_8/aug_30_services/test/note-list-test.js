'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/note-list')(testApp);

describe('note list component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.notes = [{text: 'test 1'}, {text: 'test 2'}, {text: 'test a'}];
  }));

  it('should list notes', function() {
    let noteList = this.compile(require('./note-list-test.html'))(this.scope);
    this.scope.$digest();
    expect(noteList.find('h2').text()).toBe('test');
    expect(noteList.find('li').length).toBe(this.scope.notes.length);
    expect(noteList.find('p').text()).toBe(this.scope.notes.map((note) => note.text).join(''));
  });

  it('should remove a note', function() {
    let noteList = this.compile(require('./note-list-test.html'))(this.scope);
    this.scope.$digest();
    noteList.find('button')[0].click();
    debugger;
    noteList.triggerHandler('input');
    expect(this.scope.notes.length).toBe(2);
    expect(noteList.find('p').text()).not.toContain('test 1');
  });
});
