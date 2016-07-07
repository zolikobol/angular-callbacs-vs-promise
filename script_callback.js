var app = angular.module('myApp', []);

var t0 = performance.now();
var t1;

app.service('dataService', function($http) {
  this.getData = function($scope , callback) {
    $http({method:"GET", url:"https://api.github.com/users/" + $scope.username}).then(function(result){
      callback($scope , result.data);
    });
  };
});

app.controller('gitHubDataController', ['$scope','$http','dataService', function($scope, $http, dataService) {
  $scope.username = "globalthemes";
  dataService.getData($scope , function loadData($scope , result){
    $scope.userData = result;
    console.log(result);
    t1 = performance.now();
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");;
  });
}]);
