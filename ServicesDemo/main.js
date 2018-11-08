var app = angular.module('app', []);
app.controller('mainController',['$scope', 'calcService', 'calcFactory',function($scope, calcService, calcFactory) {
    $scope.onAdd = function() {
        $scope.x = calcService.doSum($scope.a,$scope.b);
    };

    $scope.onSubtract = function() {
        $scope.y = calcFactory.subtract($scope.c,$scope.d);
    }
    
}]);

app.service('calcService', function() {
    this.doSum = function(a,b) {
        return a + b;
    }
});

app.factory('calcFactory', function() {
    var ocalcFactory = {};
    ocalcFactory.subtract = function(c,d) {
        return (c-d)
    }
    return ocalcFactory;
});