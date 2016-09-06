'use strict';

module.exports = (app) => {
  require('./sign_up')(app);
  require('./sign_in')(app);
  require('./list-form')(app);
  require('./list')(app);
};
