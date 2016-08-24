'use strict';

module.exports = function(app) {
  require('./dummy-component')(app);
  require('./another-component')(app);
};
