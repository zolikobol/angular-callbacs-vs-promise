var app = angular.module('myApp', []);

var t0 = performance.now();
var t1;

app.service('dataService', function($http) {

   this.getData = function(username) {
        return $http({method:"GET", url:"https://api.github.com/users/" + username}).then(function(result){
          console.log(result.data);
            return result.data;
        });
    };

});

app.controller('gitHubDataController', ['$scope','$http','dataService', function($scope, $http, dataService) {

$scope.username = "globalthemes";

var dataPromise = dataService.getData($scope.username);
    dataPromise.then(function(result) {
       $scope.userData = result;
       t1 = performance.now();
       console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
    });

}]);
