'use strict';

module.exports = function(app) {
  app.controller('CountController', ['cfCount', function(count) {
    this.increase = count.increase.bind(count);
    this.getCount = count.getCount.bind(count);
  }]);
};
