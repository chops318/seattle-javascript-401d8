'use strict';

module.exports = function(app) {
  app.controller('DemoController', function() {
    this.getNotes = () => {
      console.log(this.notes);
    };
    this.notes = [{
      text: 'finish lecture'
    }, {
      text: 'push demo code'
    }, {
      text: 'publish assignment'
    }, {
      text: 'upload screen caps'
    }, {
      text: 'teach brian to play magic'
    }, {
      text: 'go skating'
    }];
  });
};
