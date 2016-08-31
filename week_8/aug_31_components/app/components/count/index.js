'use strict';

module.exports = function(app) {
  require('./count-controller')(app);
  require('./count-directive')(app);
};
