'use strict';

const angular = require('angular');

let demoApp = angular.module('demoApp', [require('angular-route')]);
require('./home-directive')(demoApp);

demoApp.config('$routeProvider', function($rp) {
  $rp
    .when('/home/:id', {
      template: require('../html/home.html')
    })
    .otherwise({
      redirectTo: '/home/1'
    })
});
