'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular')

// create angular module
angular.module('demoApp', [])

// controllers
require('./controller/player-controller');
