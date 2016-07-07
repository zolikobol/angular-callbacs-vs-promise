var app = angular.module('myApp', []);

app.service('dataService', function($http) {
  this.getData = function($scope , callback) {
    $http({method:"GET", url:"https://api.github.com/users/" + $scope.username}).then(function(result){
      callback($scope , result.data);
    });
  };
});

app.controller('gitHubDataController', ['$scope','$http','dataService', function($scope, $http, dataService) {
  $scope.username = "globalthemes";
  dataService.getData($scope , loadData);
}]);

function loadData($scope , result){
  $scope.userData = result;
  console.log(result);
}
