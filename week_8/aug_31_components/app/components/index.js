'use strict';

module.exports = function(app) {
  require('./note-list')(app);
  require('./count')(app);
};
