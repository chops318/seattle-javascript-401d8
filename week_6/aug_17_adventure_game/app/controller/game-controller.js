'use strict';

const angular  = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameController', ['$log', GameController]);

function GameController($log){
  this.history = [{ id: 0, text: 'You are on gooy adventure.'}];

  this.directions = ['north', 'south', 'east', 'west'];

  this.player = {
    name: 'percilla',
    hp: 100,
    location: 'roomA',
  };

  this.map = require('../lib/map.js');

  this.moveDirection = function(direction){
    $log.debug('gameCtrl.moveDirection');
    if (this.map[this.player.location]){
      let currentLocation = this.map[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if( nextRoom !== 'wall') {
        this.player.location = nextRoom;
        this.logHistory('you have entered ' + this.player.location);
        return;
      }
      this.logHistory('you hit wall');
    } 
  }

  this.logHistory = function(info){
    this.history.push({id: this.history.length, text:`${this.player.name}, ${info}`});
  };
}

