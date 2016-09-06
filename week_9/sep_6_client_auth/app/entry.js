'use strict'

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let demoApp = angular.module('demoApp', [require('angular-route')]);

require('./controller')(demoApp);
require('./components')(demoApp);

demoApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`;
  $rs.noteListUrl = $rs.baseUrl + '/api/list';
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

demoApp.config(['$routeProvider', ($rp) => {
  $rp
    .when('/notes', {
      template: require('./html/notes.html')
    })
    .when('/signup', {
      template: require('./html/signup.html')
    })
    .when('/signin', {
      template: require('./html/signin.html')
    })
    .otherwise({
      redirectTo: 'notes'
    });
}]);
