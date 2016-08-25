'use strict';

module.exports = function(app) {
  require('./note-item-controller')(app);
  require('./note-item-directive')(app);
};
