var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/first-route', {
        templateUrl: "firstRoute.html",
        controller: "firstController"
    });

}]);

app.controller('firstController',['$scope', function($scope) {
    $scope.a = 20 + 10;
}]);