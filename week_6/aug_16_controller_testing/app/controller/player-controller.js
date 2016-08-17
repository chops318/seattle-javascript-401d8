'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('PlayerController', ['$scope', function($scope){
  $scope.playerCtrl = {};
  $scope.playerCtrl.isDone = false;
  $scope.playerCtrl.classes = ['slime', 'fuzzy', 'hacker', 'bubbly'];

  $scope.playerCtrl.signUp = function(player){
    console.log('player', player);
    // creates the player 
    $scope.playerCtrl.player = player;
    $scope.playerCtrl.isDone = true;
  };
}]);




