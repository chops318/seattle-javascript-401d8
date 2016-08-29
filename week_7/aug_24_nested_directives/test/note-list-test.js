'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);

require('../app/components/note-list')(testApp);

describe('note-list directive', function() {
  beforeEach(angular.mock.module('testApp'));

  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.rootScope = $rootScope;
    this.scope = $rootScope.$new();
  }));

  it('note list should display notes', function() {
    this.scope.notes = [{text: 'test note 1'}, {text: 'test note 2'}];
    let nl = this.compile(require('./note-list-test.html'))(this.scope);
    this.rootScope.$digest();
    expect(nl.find('h2').text()).toBe('test');
    expect(nl.find('li').length).toBe(2);
  });

  it('should remove a note from the list', function() {
    this.scope.notes = [{text: 'test note 1'}, {text: 'test note 2'}];
    let nl = this.compile(require('./note-list-test.html'))(this.scope);
    this.rootScope.$digest();
    nl.find('button')[0].click();
    nl.triggerHandler('input');
    expect(this.scope.notes.length).toBe(1);
  });
});
