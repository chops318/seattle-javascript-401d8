'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', ['$rootScope', HomeController]);



//with constructor function
function HomeController($rootScope) {
  this.images = $rootScope.imageData;
}