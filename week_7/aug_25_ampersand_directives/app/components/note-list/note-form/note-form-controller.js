'use strict';

module.exports = function(app) {
  app.controller('NoteFormController', ['$scope', function($scope) {
    this.save = $scope.save;
    this.buttonText = $scope.buttonText;
    this.note = $scope.note || {};
    this.saveAndNull = (note) => {
      this.save({note: this.note});
      this.note = null;
    };
  }]);
};
