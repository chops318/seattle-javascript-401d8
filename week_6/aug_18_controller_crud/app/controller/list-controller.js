'use strict';

const angular = require('angular')
const demoApp = angular.module('demoApp');

demoApp.controller('ListController', ['$log', '$http', ListController]);

function ListController($log, $http){
  this.lists = [];
  let baseUrl = `${__API_URL__}/api/list`;
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  this.createList = function(list){
    $log.debug('listCtrl.createList');
    $http.post(baseUrl , list, config)
      .then( res => {
        $log.log('success!', res.data);
        this.lists.push(res.data);
      })   
      .catch( err => {
        $log.error('error!', err);
        alert('YOU FUD UP');
      });
  }
}

