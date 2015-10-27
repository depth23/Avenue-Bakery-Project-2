var app = angular.module('avBApp');

app.controller('seasonalCtrl', function($scope, seasonalSrvc) {
    
    var seasonal = function() {
        $scope.seasonal = seasonalSrvc.getSeasonal();
    }
    
    seasonal();
    
    console.log($scope.seasonal);
    $scope.removeFromSeasonal = function(i) {
        seasonalSrvc.removeFromSeasonal(i);
        seasonal();
    }
    
});