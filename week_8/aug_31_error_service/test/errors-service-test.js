'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/services')(testApp);

describe('service: cfErrors', function() {
  beforeEach(angular.mock.module('testApp'));

  it('should add errors', angular.mock.inject(function(cfErrors) {
    let err = new Error('test error');
    cfErrors.add(err);
    expect(cfErrors.errors[0].message).toBe('test error');
  }));

  it('should remove errors', angular.mock.inject(function(cfErrors) {
    let err = new Error('another test error');
    cfErrors.errors = [err];
    cfErrors.remove(err);
    expect(cfErrors.errors.indexOf(err)).toBe(-1);
  }));
});
