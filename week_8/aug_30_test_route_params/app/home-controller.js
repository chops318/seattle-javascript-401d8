'use strict';

module.exports = function(app) {
  app.controller('HomeController', ['$routeParams', function($rp) {
    this.id = $rp.id;
    this.getId = () => {
      return this.id;
    };

    this.setId = id => {
      this.id = id; 
      return this.id;
    };
  }]);
};
