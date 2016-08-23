'use strict';

module.exports = function(app) {
  app.controller('DemoController', function() {
    this.posts = [{
      title: 'Frist Post',
      contents: 'Wow, such post, much content',
      mutable: true
    }, {
      title: 'Second Post',
      contents: 'Moar Gr8 Content From the intarwebzzzz'
    }, {
      title: 'Third Post',
      contents: 'Some more content',
      mutable: true
    }]
  });
};
