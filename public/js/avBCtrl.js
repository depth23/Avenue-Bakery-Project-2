var app = angular.module('avBApp');

app.controller('avBCtrl', function($scope, avBSrvc, $location) {

    $scope.logOutUser = function() {
        avBSrvc.logOutUser().then(function(response) {
            console.log(response);
            $location.path('/');
        });
    }
    
});