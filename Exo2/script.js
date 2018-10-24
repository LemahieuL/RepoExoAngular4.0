// var App = angular.module("App", []);
// App.controller("CarCtrl", function($scope, $http) {
// $http.get("voiture.json")
// .then(function(response) {
//   $scope.cars = response.data;
// });
// });
var app = angular.module("testApp", []);
app.controller('carCtrl', function($scope, $http){
  $http.get("voiture.json")
  .then(function(response) {
    $scope.cars = response.data;
    console.log(cars)

  })
})
