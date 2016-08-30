'use strict';

const angular = require('angular');
let testApp = angular.module('testApp',[require('angular-route')]);

require('../app/home-directive')(testApp);

describe('Home Directive With an Id of 5', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.id = 5;
  }));

  it('should get a route param', function() {
    let homeDirective = this.compile('<cf-home></cf-home>')(this.scope);
    this.scope.$digest();
    let ctrl = homeDirective.isolateScope().ctrl;
    expect(ctrl.getId()).toBe(5);
    expect(homeDirective.find('div').text()).toBe('5');
  });

  it('won\'t update the original isolate scope', function() {
    let homeDirective = this.compile('<cf-home></cf-home>')(this.scope);
    this.scope.$digest();
    let ctrl = homeDirective.isolateScope().ctrl;
    ctrl.setId(10); 
    this.scope.$digest();
    expect(ctrl.getId()).toBe(10);
    expect(homeDirective.find('div').text()).toBe('10');
  });
});
