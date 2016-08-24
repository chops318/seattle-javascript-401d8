'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', []);
require('../app/components/dummy-component')(testApp);

describe('dummy directive', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should laod into the dom', function() {
    let dd = this.compile(require('./dummy-directive-test.html'))(this.scope);
    this.scope.$digest();
    expect(dd.find('h2').text()).toBe('test');
  });

  it('it should have content', function() {
    this.scope.contents = 'hello test';
    let dd = this.compile(require('./dummy-directive-test.html'))(this.scope);
    this.scope.$digest();
    expect(dd.find('h3').text()).toBe('hello test');
    let input = dd.find('input');
    input.val('new content');
    debugger;
    input.triggerHandler('input');
    expect(this.scope.contents).toBe('new content');
  });
});
