'use strict';

module.exports = function(app) {
  require('./dummy-directive-ctrl')(app);
  require('./dummy-directive')(app);
};
