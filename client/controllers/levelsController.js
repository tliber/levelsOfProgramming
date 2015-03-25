console.log('controller file loaded')
angular.module('levels.controller', [])
  .controller('levelsController', ['$scope', function($scope) {
    // debugger;
    console.log("from levels levelsController")
    $scope.boo = 'fawafawfawfafwfwa'
  }])
  // // console.log(angular.module('levelsApp', []))
  // debugger;