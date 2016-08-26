'use strict';

module.exports = function(app) {
  require('./note-item')(app);
  require('./note-list-controller')(app);
  require('./note-list-directive')(app);
};
