'use strict'

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let demoApp = angular.module('demoApp', []);

demoApp.run(['$rootScope', ($rs) => {
  $rs.noteListUrl = `${__API_URL__}/api/list`;
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

require('./components')(demoApp);
