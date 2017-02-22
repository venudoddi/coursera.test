(function () {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', ['$scope', '$filter', DIController]);
DIController.$inject = ['$scope', '$filter'];
  function DIController($scope, $filter) {
    $scope.name='Venu';

    $scope.upper=function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})();
