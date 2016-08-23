'use strict';

module.exports = function(app) {
  require('./another-directive-ctrl')(app);
  require('./another-directive')(app);
};
