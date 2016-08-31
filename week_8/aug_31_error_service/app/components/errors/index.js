'use strict';

module.exports = function(app) {
  require('./errors-controller')(app);
  app.component('cfErrors', {
    template: require('./errors-template.html'),
    controller: 'ErrorsController'
  });
};
