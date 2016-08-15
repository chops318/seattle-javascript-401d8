'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');

// angular module
angular.module('demoApp', []);

// services
// contollers
angular.module('demoApp')
.controller('CowsayController', ['$scope', function($scope){
  $scope.cowtext = 'wish i had something to say';
  $scope.say = function(){
    return '\n' + cowsay.say({text: $scope.cowtext});
  }
  $scope.speakIt = function(){
    $scope.result = $scope.say();
  }
}])

// components / directives
