(function () {
'use strict';

angular.module('Lunchapp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.color = "primary";
  $scope.string = "";
  $scope.message = "";

  $scope.checkTooMuch = function () {
    var items = $scope.string.split(',');
    var itemsCount = items.length;
    switch (true) {
      case ($scope.string == ""):
        $scope.message = "Please enter data first";
        $scope.color = "danger";
      break;
      case (itemsCount <= 3):
        $scope.message = "Enjoy!";
        $scope.color = "success";
      break;
      default:
        $scope.message = "Too much!";
        $scope.color = "danger";
    }
  };
}

})();
