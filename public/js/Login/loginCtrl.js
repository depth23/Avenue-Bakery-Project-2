var app = angular.module('avBApp');

app.controller('loginCtrl', function($scope, loginSrvc, $location) {
    
    $scope.addNewUser = function(user) {
        console.log(333333, user);
        loginSrvc.addNewUser(user).then(function(response) {
           console.log(response)
        })
    }
    
    $scope.logInUser = function(credentials) {
        
        loginSrvc.logInUser(credentials).then(function(response) {  
          console.log('success')
            $location.path('/Menu');
        })
    }
    
    
});